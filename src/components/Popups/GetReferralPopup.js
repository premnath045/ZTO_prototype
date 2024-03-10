import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Select from 'react-select';
import { getAllMashersApi, inviteMasherApi } from '../../apis';

import { InputErrorMessage } from '../errorMessages';
import { autoHeightText, style } from '../../utils/helperFunctions';
import { EditProfileLoader } from '../common/loader';
import { referMashersValidation } from '../Validation';
import { Envelope,Plus,X } from 'react-bootstrap-icons';
export default function GetReferralPopup() {
  const [mashersList, setMashersList] = useState();
  const [briefId, setBriefId] = useState('');
  const [mashers, setMashers] = useState(null);
  const[addnew,setaddnew]=useState(false);
  const [invitedMashers, setInvitedMashers] = useState({ data: null, loading: false });
  const modal = document.querySelector('#ReferralPopup');

  let searchFilter = {
    search: '',
    skills: '',
    minExperience: '',
    maxExperience: '',
    location: '',
    page: 10,
    limit: 20,
    status: '',
    industryType: '',
    clientsWorkedFor: '',
    startDate: '',
    dueDate: '',
    fieldName: '',
    orderBy: ''
  };

  const getMashersFromApi = async (...search) => {
    try {
      const res = await getAllMashersApi(...search);
      if (res.status === 200) {
        setMashersList(res.data.data);
      }
    } catch (error) {
      console.error('Api call failed', error);
    }
  };
   
  useEffect(() => {
    getMashersFromApi({...searchFilter});
  }, []);

  const masherOptions =
  mashersList?.map((item, i) => {
    const container = {};
    container['value'] = item?._id;
    container['label'] = `${item?.userId?.firstName} ${item?.userId?.lastName}`;
    container['email'] = `${item?.userId?.email}`;
    return container;
  });

  // const msg = '📬  Help Us Mash  \n\nA brief has come through that everyone at Mash agreed you would be perfect for. \n\nJump on the platform, take a closer look at the brief and let us know if you have any questions and whether you want to move ahead over the next 48 hours. \n\nNo hard feelings if you decide to skip it, even though I’ll be a little sad we aren’t Mashing together this time around. \n\nThanks,\n\nMash';
  const msg = 'Hey, we have a requirement for';

  const formik = useFormik({
    initialValues: {
      mashers: [],
      briefId: '',
      msg,
    },
    onSubmit: async (values) => {
      if(mashers==null  ){
        toast.error('Please add email address before submitting', { id: '002' });
        return;
      }
      if(mashers.length===0  ){
        toast.error('Please add email address before submitting', { id: '002' });
        return;
      }
      setInvitedMashers({ loading: true });
      try {
        const res = await inviteMasherApi(values);
        if (res.status === 200 || 201) {
          toast.success(res?.data?.message, { id: '001' });
          setInvitedMashers({ data: res, loading: false });
          formik?.resetForm();
          setMashers(null);
          setaddnew(false);
          modal.click();
        }
      } catch (err) {
        setInvitedMashers({ loading: false });
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
      briefId: '',
    }));
  }, [mashers]);

  const handleChange = (e) => {
    formik.handleChange(e);
  };


  return (
    <>
      <div
        className="modal"
        id="ReferralPopup"
        tabIndex={-1}
        aria-labelledby="ReferralPopup"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content shadow-3">
            <div className="modal-body">
              <form onSubmit={formik.handleSubmit} >
                <h5 className='text-[#101828] font-bold mb-2'>Request a Referral</h5>
                <textarea type='text' 
                  onKeyUp={(e) => autoHeightText(e)}
                  className='px-4 py-2 border border-[#D0D5DD] rounded-lg w-full mt-2'
                  placeholder='Lorem ipsum...'
                  rows='3'
                  value={formik.values.msg}
                  onChange={handleChange}
                  name='msg'
                />
                <h5 className='text-[#101828] font-bold mt-3 mb-2'>Email address</h5>
                {mashers && mashers.length > 0 ? (
                  mashers.map((item, index) => (
                    <div key={index} className="px-4 py-2 border border-[#D0D5DD] text-[#667085] rounded-lg w-full mt-2 flex items-center justify-start gap-2">
                      <Envelope size={20} /> {item.email}
                    </div>
                  ))
                ) : (
                  <div></div>
                )}
     
                <button type='button' className={!addnew ? 'text-[#00A46F] font-bold mt-3 mb-2 text-sm flex items-center justify-start gap-0':'text-[#00A46F] font-bold mt-3 mb-2 text-sm flex items-center justify-end gap-0 w-full'} 
                  onClick={()=>{setaddnew(!addnew);}}>
                  {
                    !addnew ?  <><Plus size={20} /> {mashers && mashers.length > 0 ? 'Add another' : 'Add Email'}</> : <><X size={20} /> close</> 
                  }
         
                </button>
                {
                  addnew &&  <Select
                    // styles={style}
                    isMulti
                    value={mashers}
                    onChange={(e) => {
                      setMashers(e);}}
                    name='mashers'
                    options={masherOptions}
                    className='form-control p-015'
                    classNamePrefix='select'
                  />
                }
                <div className='w-full flex justify-between mt-8 gap-4'>
                  <button className='text-lg font-semibold text-[#344054] w-full py-2 border-[#344054] border' type='button' data-bs-dismiss="modal" aria-label="Close" >Cancel</button>
                  <button type='submit' className='text-lg text-white bg-[#00A46F] w-full py-2'>
                    {invitedMashers?.loading ? (
                      <div className='text-xs'>
                        <EditProfileLoader />
                      </div>
                    ) : (
                      'Send Email'
                    )}
                  </button>
                </div>
              </form>
            </div>
          
          </div>
        </div>
      </div>
 
    </>
  );
}
