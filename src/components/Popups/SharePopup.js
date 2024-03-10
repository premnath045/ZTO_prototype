import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Select from 'react-select';
import { inviteMasherApi } from '../../apis';
import { InputErrorMessage } from '../../components/errorMessages';
import { autoHeightText, style } from '../../utils/helperFunctions';
import { EditProfileLoader } from '../common/loader';
import { inviteMasherValidation } from '../Validation';

export default function SharePopup({ brief, masherDataShare, invitedMashers, invMasher, briefDetails }) {
  const [mashers, setmashers] = useState(['']);
  const [briefId, setBriefId] = useState('');
  const [inviteMasher, setInviteMasher] = useState({ data: null, loading: false });
  const modal = document.querySelector('#modalExportMasher');

  const briefDt = brief?.data;
  const masherDt = masherDataShare?.data;

  const invArr = invitedMashers?.map((ele, i) => {
    return ele?.masherId;
  });

  let arr = invArr ? masherDt?.concat(invArr) : masherDt;

  let uniqueArr = arr?.reduce((acc, current) => {
    const duplicateIndex = acc?.findIndex((obj) => obj?._id === current?._id);
    if (duplicateIndex === -1) {
      acc.push(current);
    } else {
      acc.splice(duplicateIndex, 1);
    }
    return acc;
  }, []);

  const masherOptions =
    briefId?.value &&
    uniqueArr?.map((item) => {
      const container = {};
      container['value'] = item?._id;
      container['label'] = `${item?.userId?.firstName} ${item?.userId?.lastName}`;
      container['email'] = `${item?.userId?.email}`;
      return container;
    });

  const options = briefDt?.map((item) => {
    const container = {};
    container['value'] = item._id;
    container['label'] = `${item.briefName}`;
    return container;
  });

  useEffect(() => {
    if (briefId?.value && invMasher) {
      invMasher(briefId?.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [briefId]);

  useEffect(() => {
    if (briefDetails?.data?.brief) {
      setBriefId({ value: briefDetails?.data?.brief?._id, label: briefDetails?.data?.brief?.briefName });
    }
  }, [briefDetails?.data?.brief]);

  const msg = '📬  NEW BRIEF!  \n\nA brief has come through that everyone at Mash agreed you would be perfect for. \n\nJump on the platform, take a closer look at the brief and let us know if you have any questions and whether you want to move ahead over the next 48 hours. \n\nNo hard feelings if you decide to skip it, even though I’ll be a little sad we aren’t Mashing together this time around. \n\nThanks,\n\nMash';

  const formik = useFormik({
    initialValues: {
      mashers: [{ id: '', email: '' }],
      briefId: '',
      msg,
    },
    validationSchema: inviteMasherValidation,
    onSubmit: async (values) => {
      setInviteMasher({ loading: true });
      try {
        const res = await inviteMasherApi(values);
        if (res.status === 200 || 201) {
          toast.success(res?.data?.message, { id: '001' });
          setInviteMasher({ data: res, loading: false });
          formik?.resetForm();
          modal.click();
          setmashers(['']);
          setBriefId('');
          if (briefId?.value && invMasher) {
            invMasher(briefId?.value);
          }
        }
      } catch (err) {
        setInviteMasher({ loading: false });
      }
    },
  });

  useEffect(() => {
    formik.setValues((c) => ({
      ...c,
      mashers:
        mashers &&
        mashers?.map((el) => {
          return { id: el.value, email: el.email, firstName: el?.label?.split(' ')[0] };
        }),
      briefId: briefId?.value,
    }));
  }, [mashers, briefId]);

  const handleChange = (e) => {
    formik.handleChange(e);
  };

  return (
    <>
      <div className='modal fade' id='modalExportMasher' tabIndex={-1} aria-labelledby='modalExportMasher' aria-hidden='true'>
        <div className='modal-dialog modal-lg vh-100'>
          <form onSubmit={formik.handleSubmit} className='justify-content-center align-items-center d-flex vh-100'>
            <div className='modal-content shadow-3'>
              <div className='modal-header'>
                <div className='icon icon-shape rounded-3 bg-soft-primary  text-lg me-4 popIcon '>
                  <big>📬</big>
                </div>
                <div>
                  <h5 className='mb-1'>Share Brief with Mashers</h5>
                </div>
                <div className='ms-auto'>
                  <i className='bi bi-x-lg cursor-pointer' data-bs-dismiss='modal'></i>
                </div>
              </div>
              <div className='modal-body'>
                <div className='col-md-12 mb-2'>
                  <label className='form-label'>Brief Name</label>
                  <Select
                    styles={style}
                    value={briefId}
                    onChange={(e) => {
                      setBriefId(e);
                      setmashers(['']);
                    }}
                    name='briefId'
                    options={options}
                    className='form-control p-015'
                    classNamePrefix='select'
                  />
                  <InputErrorMessage error={formik.touched.briefId && formik.errors.briefId} marginBottom={-5} />
                </div>
                <div className='col-md-12 mb-2'>
                  <label className='form-label'>Select Mashers</label>
                  <Select
                    styles={style}
                    isMulti
                    value={mashers}
                    onChange={(e) => setmashers(e)}
                    name='mashers'
                    options={masherOptions}
                    className='form-control p-015'
                    classNamePrefix='select'
                  />
                  <InputErrorMessage error={formik.touched.mashers && formik.errors.mashers} marginBottom={-5} />
                </div>
                <div className='col-md-12 mb-2'>
                  <label className='form-label'>Add your message to the brief</label>
                  <textarea
                    onKeyUp={(e) => autoHeightText(e)}
                    className='form-control'
                    placeholder='Lorem ipsum...'
                    rows='8'
                    value={formik.values.msg}
                    onChange={handleChange}
                    name='msg'
                  />
                  <InputErrorMessage error={formik.touched.msg && formik.errors.msg} marginBottom={-5} />
                </div>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-sm btn-neutral' data-bs-dismiss='modal'>
                  Close
                </button>
                <button type='submit' className='btn btn-sm btn_primary_black'>
                  {inviteMasher?.loading ? (
                    <div className='text-xs'>
                      <EditProfileLoader />
                    </div>
                  ) : (
                    'Send Brief Invite'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
