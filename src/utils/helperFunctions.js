import toast from 'react-hot-toast';
import { getAllBriefApi, getAllClientsApi,fetchClientApiV2, getMasherShareApi, getClientByIdApi, updateMasherProfileApi, uploadProfileImgApi } from '../apis';
import { API_BASE_URL } from './baseurl';
import ProfileDefault from '../../src/Assets/img/covers/userDefault.png';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const currDate = moment().format('YYYY-MM-DD');

export const getToken = () => localStorage.getItem('token');
export const setToken = (token) => localStorage.setItem('token', token);
export const removeToken = () => localStorage.removeItem('token');
export const isAuth = () => Boolean(getToken());
export const logoutOnJwtExpire = () => localStorage.clear();
export const preventBack = () => window.history.forward();
export const assignBucketUrl = (path) => {
  return encodeURI(path?.startsWith('uploads/') ? API_BASE_URL + '/' + path : path);
};
export const style = {
  control: (base) => ({
    ...base,
    border: 0,
    boxShadow: 'none',
    backgroundColor: 'transparent',
    margin: '0 !important',
    minHeight: '0'
  }),
};

export const helperFileUpload = async (formik, event) => {
  const logoImg = event?.target?.files[0];
  const formdata = new FormData();
  formdata.append('file', logoImg);

  const loadingToast = toast.loading('File Uploading...');

  try {
    if (logoImg?.name?.match(/\.(jpg|jpeg|png|mp4|mov|mkv|webm|pdf|doc|docx|xls)$/)) {
      const response = await uploadProfileImgApi(formdata);
      if (response.status === 200 || response.status === 201) {
        toast.success(response?.data?.message);
        toast.dismiss(loadingToast);
      }
      formik.setFieldValue(event?.target?.name, response?.data?.filePath);
    } else {
      toast.dismiss(loadingToast);
      toast('Unsupported File Format', { icon: '⚠️' });
    }
  } catch (err) {
    toast.error('Something went wrong ');
  }
};

export const helperImageUpload = async (formik, event) => {
  const logoImg = event?.target?.files[0];
  const formdata = new FormData();
  formdata.append('file', logoImg);

  const loadingToast = toast.loading('File Uploading...');

  try {
    if (logoImg?.name?.match(/\.(jpg|jpeg|png)$/)) {
      const response = await uploadProfileImgApi(formdata);

      if (response.status === 200 || response.status === 201) {
        toast.success(response?.data?.message);
        toast.dismiss(loadingToast);
      }
      formik.setFieldValue(event?.target?.name, response?.data?.filePath);
    } else {
      toast.dismiss(loadingToast);
      toast('Unsupported File Format', { icon: '⚠️' });
    }
  } catch (err) {
    toast.error('Something went Wrong');
    toast.dismiss(loadingToast);
  }
};

export const helperVideoUpload = async (formik, e) => {
  const loadingToast = toast.loading('File Uploading...');

  try {
    let uploadedVideo = e.target.files[0];
    if (!uploadedVideo) {
      return;
    }
    const type = uploadedVideo.type.split('/')[1];
    const videoType = ['mp4', 'mkv', 'webm', 'mov', '3gp', '3gpp', 'quicktime'];
    const validIVideoType = videoType.includes(type);
    if (!validIVideoType) {
      toast.dismiss(loadingToast);
      toast('Unsupported File Format', { icon: '⚠️' });

      return;
    }
    const formdata = new FormData();
    formdata.append('file', uploadedVideo);
    const resVideoUpload = await uploadProfileImgApi(formdata);
    if (resVideoUpload?.status === 200) {
      toast.dismiss(loadingToast);
    }
    formik.setFieldValue(e.target.name, resVideoUpload.data.filePath);
    toast.success(resVideoUpload.data.message, { id: 'succcess' });
  } catch (err) {
    toast.error('Something went Wrong');
    toast.dismiss(loadingToast);
  }
};

export const getLastElementId = (pathname) => {
  let path;
  if (pathname) {
    path = pathname.split('/');
  }
  path = window.location.href.split('/');
  return path[path.length - 1];
};

export const handleMasherUpdate = async (id, status) => {
  try {
    const res = await updateMasherProfileApi({ id, status });
  } catch (error) {
    toast.error(error.response.data.message, { id: '002' });
  }
};

export const autoHeightText = (el) => {
  el.target.style.height = '69px';
  el.target.style.height = 1 + el.target.scrollHeight + 'px';
};

export const helperAttachmentCheck = (attachment) => {
  let extensionCheck = attachment?.split('.')?.at(-1).toLowerCase();

  if (extensionCheck === 'png' || extensionCheck === 'jpg' || extensionCheck === 'jpeg') {
    return (
      <a href={attachment} target='_blank' rel='noreferrer'>
        <img
          alt=''
          src={assignBucketUrl(attachment)}
          onError={(event) => {
            event.target.src = ProfileDefault;
            event.onerror = null;
          }}
          style={{
            width: '80px',
            height: '80px',
            border: '1px solid rgb(25, 19, 19, 0.25)',
            borderRadius: '50%',
            boxShadow: '0px 7px 9px -4px rgba(0,0,0,0.1)',
            marginRight: '10px',
          }}
        />
      </a>
    );
  } else if (extensionCheck === 'mp4' || extensionCheck === 'webm' || extensionCheck === 'mkv' || extensionCheck === 'mov') {
    return (
      <a href={attachment} target='_blank' rel='noreferrer'>
        <div
          style={{
            width: '80px',
            transition: '0.2s all',
            height: '80px',
            border: '1px solid rgb(25, 19, 19, 0.5)',
            borderRadius: '50%',
            boxShadow: '0px 7px 9px -4px rgba(0,0,0,0.1)',
            marginRight: '10px',
            background: 'rgba(230, 203, 71, 1)',
            color: 'black',
          }}
          className='icon icon-shape text-xl masherIcon '>
          <i className='bi bi-camera-video'></i>
        </div>
      </a>
    );
  } else if (extensionCheck === 'pdf' || extensionCheck === 'doc' || extensionCheck === 'docx' || extensionCheck === 'xls') {
    return (
      <a href={attachment} target='_blank' rel='noreferrer'>
        <div
          style={{
            width: '80px',
            transition: '0.2s all',
            height: '80px',
            border: '1px solid rgb(25, 19, 19, 0.5)',
            borderRadius: '50%',
            boxShadow: '0px 7px 9px -4px rgba(0,0,0,0.1)',
            marginRight: '10px',
            background: 'rgba(230, 203, 71, 1)',
            color: 'black',
          }}
          className='icon icon-shape text-xl masherIcon '>
          <i className='bi bi-file-earmark-fill'></i>
        </div>
      </a>
    );
  } else if (extensionCheck === '') {
    return (
      <img
        alt=''
        src={assignBucketUrl(attachment)}
        onError={(event) => {
          event.target.src = ProfileDefault;
          event.onerror = null;
        }}
        style={{
          width: '80px',
          height: '80px',
          border: '1px solid rgb(25, 19, 19, 0.25)',
          borderRadius: '50%',
          boxShadow: '0px 7px 9px -4px rgba(0,0,0,0.1)',
          marginRight: '10px',
        }}
      />
    );
  }
};

export const helperBriefAttachmentCheck = (attachment, formik3, i) => {
  let extensionCheck = attachment?.split('.')?.at(-1).toLowerCase();

  if (extensionCheck === 'png' || extensionCheck === 'jpg' || extensionCheck === 'jpeg') {
    return (
      <a href={attachment} className='position-relative' target='_blank' rel='noreferrer'>
        <img
          alt=''
          src={assignBucketUrl(attachment)}
          onError={(event) => {
            event.target.src = ProfileDefault;
            event.onerror = null;
          }}
          style={{
            width: '80px',
            height: '80px',
            border: '1px solid rgb(25, 19, 19, 0.25)',
            borderRadius: '50%',
            boxShadow: '0px 7px 9px -4px rgba(0,0,0,0.1)',
            marginRight: '10px',
          }}
        />
      </a>
    );
  } else if (extensionCheck === 'mp4' || extensionCheck === 'webm' || extensionCheck === 'mkv' || extensionCheck === 'mov') {
    return (
      <a href={attachment} className='position-relative' target='_blank' rel='noreferrer'>
        <div
          className=' '
          style={{ position: 'absolute', right: '0', color: 'red' }}
          onClick={(e) => {
            e.stopPropagation();
            formik3.setFieldValue(`attachments.${[i]}.file`, '');
          }}>
          <i className='bi bi-x cursor-pointer'></i>
        </div>
        <div
          style={{
            width: '80px',
            transition: '0.2s all',
            height: '80px',
            border: '1px solid rgb(25, 19, 19, 0.5)',
            borderRadius: '50%',
            boxShadow: '0px 7px 9px -4px rgba(0,0,0,0.1)',
            marginRight: '10px',
            background: 'rgba(230, 203, 71, 1)',
            color: 'black',
          }}
          className='icon icon-shape text-xl masherIcon '>
          <i className='bi bi-camera-video'></i>
        </div>
      </a>
    );
  } else if (extensionCheck === 'pdf' || extensionCheck === 'doc' || extensionCheck === 'docx' || extensionCheck === 'xls') {
    return (
      <>
        <a href={attachment} className='position-relative' target='_blank' rel='noreferrer'>
          <div
            style={{
              width: '80px',
              transition: '0.2s all',
              height: '80px',
              border: '1px solid rgb(25, 19, 19, 0.5)',
              borderRadius: '50%',
              boxShadow: '0px 7px 9px -4px rgba(0,0,0,0.1)',
              marginRight: '10px',
              background: 'rgba(230, 203, 71, 1)',
              color: 'black',
            }}
            className='icon icon-shape text-xl masherIcon '>
            <i className='bi bi-file-earmark-fill'></i>
          </div>
        </a>
      </>
    );
  } else if (extensionCheck === '') {
    return (
      <img
        alt=''
        src={assignBucketUrl(attachment)}
        onError={(event) => {
          event.target.src = ProfileDefault;
          event.onerror = null;
        }}
        style={{
          width: '80px',
          height: '80px',
          border: '1px solid rgb(25, 19, 19, 0.25)',
          borderRadius: '50%',
          boxShadow: '0px 7px 9px -4px rgba(0,0,0,0.1)',
          marginRight: '10px',
        }}
      />
    );
  }
};

export const MashersForBriefInvite = async (setMasherDataShare, _restData, status) => {
  setMasherDataShare({ loading: true });
  try {
    const res = await getMasherShareApi(status);
    if (res.status === 200) {
      setMasherDataShare({ data: res.data.data, loading: false });
    }
  } catch (error) {
    setMasherDataShare({ loading: false });
  }
};

export const BriefForBriefInvite = async (setBrief, _restData, page) => {
  try {
    const res = await getAllBriefApi(page);

    if (res.status === 200) {
      setBrief({ data: res.data.allBriefs, loading: false });
    }
  } catch (error) {
    toast.error(error);
    setBrief({ loading: false });
  }
};

export const allClientData = async ({ search = '', limit = '', page = 1 }, setClient) => {
  // setClient({ loading: true });
  // try {
  //   const res = await fetchClientApiV2(search.trim(), limit, page);
  //   if (res.status === 200) {
  //     setClient({ data: res.data.allClients, loading: false });
  //   }
  // } catch (error) {
  //   setClient({ loading: false });
  // }
};

export const handleAddFields = (name, formik) => {
  switch (name) {
  case 'deliverableDetails':
    const deliverableDetails = [
      ...formik.values.deliverableDetails,
      { id: uuidv4(), name: '', startDate: currDate, dueDate: currDate, masherRole: '', delieveryFormat: '', order: '', description: '' },
    ];
    formik.setFieldValue('deliverableDetails', deliverableDetails);
    break;
  case 'websiteLink':
    const websiteLink = [...formik.values.websiteLink, { name: '', link: '' }];
    formik.setFieldValue('websiteLink', websiteLink);
    break;
  case 'team':
    const team = [...formik.values.team, { id: uuidv4(), masherName: '', currency: '', fees: '' }];
    formik.setFieldValue('team', team);
    break;
  default:
    return;
  }
};

export const handleRemoveFields = (name, formik, i) => {
  switch (name) {
  case 'deliverableDetails':
    const delId = formik.values.deliverableDetails?.[i].id;
    const deliverableDetails = formik.values.deliverableDetails.filter((el) => el.id !== delId);
    formik.setFieldValue('deliverableDetails', deliverableDetails);
    break;
  case 'websiteLink':
    const webId = formik.values.websiteLink[i];
    const websiteLink = formik.values.websiteLink.filter((el) => el !== webId);
    formik.setFieldValue('websiteLink', websiteLink);
    break;
  case 'team':
    const id = formik.values.team[i].id;
    const team = formik?.values?.team?.filter((el) => el.id !== id);
    formik.setFieldValue('team', team);
    break;
  default:
    return;
  }
};

export const brandOptions = (client) =>
  client?.data &&
  client?.data?.map((el, i) => {
    const container = {};
    container['value'] = el._id;
    container['label'] = el?.brandName || '--';
    return container;
  });

export const getClient = async (e, formik) => {
  if (e.value) {
    formik.setFieldValue('clientName', [{ value: e.value, label: e.label }]);
  }
  try {
    const res = await getClientByIdApi(e.value);
    if (res.status === 200 || 201) {
      const brandData = res.data.client;
      if (brandData) {
        formik.setValues((c) => ({
          ...c,
          industry: brandData?.industry[0]?.value,
          region: brandData?.region[0]?.value,
          clientType: brandData?.type[0]?.value,
          logo: brandData?.logo,
        }));
      }
    }
  } catch (error) {
    toast.error('Something went wrong', { id: '001' });
  }
};

export const getBriefInvitationTimeRemaining = (validFrom, validTill) => {
  validFrom = new Date(validFrom);
  const validTillDate = validFrom.addHours(validTill);
  let timeRemaining = (validTillDate - new Date()) / 3600 / 1000;
  return timeRemaining > 0 ? SplitTime(timeRemaining) : -1;
};

Date.prototype.addHours = function (h) {
  this.setTime(this.getTime() + h * 60 * 60 * 1000);
  return this;
};

function SplitTime(numberOfHours) {
  let Days = Math.floor(numberOfHours / 24);
  let Remainder = numberOfHours % 24;
  let Hours = Math.ceil(Remainder);
  if(Hours==24){
    Days=Days+1;
    Hours=0;
  } 
  return { Days, Hours};
}
const date1 = new Date('April 10, 2023 17:24:00');

export const capitalizeFirstLetter = (string) => {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  } else {
    return '';
  }
};