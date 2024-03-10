import { useState, useEffect } from 'react';
import { getAllBriefApi } from '../../apis';
import { EditProfileLoader } from '../common/loader';
import toast from 'react-hot-toast';
import { inviteMasherApi } from '../../apis';
import './popup.css';

const ShareBriefModal = ({masher, handleModal}) => {
  const msg = '📬  NEW BRIEF!  \n\nA brief has come through that everyone at Mash agreed you would be perfect for. \n\nJump on the platform, take a closer look at the brief and let us know if you have any questions and whether you want to move ahead over the next 48 hours. \n\nNo hard feelings if you decide to skip it, even though I’ll be a little sad we aren’t Mashing together this time around. \n\nThanks,\n\nMash';

  const [briefs, setAllBriefs] = useState(null);
  const [selectedBrief, setSelectecBrief] = useState('');
  const [loading, setLoading] = useState(false);
  const [inviteMasher, setInviteMasher] = useState(masher);
  const [emailMessage, setEmailMessage] = useState(msg);

  const allBriefs = async () => {
    setLoading(true);
    try {
      const res = await getAllBriefApi();
      if (res.status === 200) {
        setAllBriefs({data: res.data.allBriefs});
        setSelectecBrief(res.data.allBriefs[0]._id);
        setLoading(false);
      }
    } catch (error) {
      toast.error(error);
      setLoading(false);
    }
  };
  
  const handleChange = (e) => {
    setEmailMessage(e.target.value);
  };

  const briefSelectionChange = (id) => {
    setSelectecBrief(id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const values = {
      briefId: selectedBrief, 
      mashers: [{
        email: inviteMasher.userId?.email || inviteMasher.email,
        firstName: inviteMasher.userId?.firstName ||inviteMasher.firstName,
        id: inviteMasher._id
      }],
      msg: emailMessage
    };
    try {
      const res = await inviteMasherApi(values);
      if (res.status === 200 || 201) {
        toast.success(res?.data?.message, { id: '001' });
      }
      setLoading(false);
      handleModal();
    } catch (err) {
      toast.error(err.message);
    }
  };
    
  useEffect(() => {
    allBriefs();
  }, []);

  return (
    <>
      <div className="basic-modal">
        <div className="basic-modal-dialog">
          <div className="basic-modal-content">
            <div className="basic-modal-header">
              <div className='icon icon-shape rounded-3 bg-soft-primary  text-lg me-4 popIcon '>
                <big>📬</big>
              </div>
              <h5 className="basic-modal-title">Send a Brief to {inviteMasher.userId?.firstName ||inviteMasher.firstName}</h5>
              <button className="basic-modal-button" onClick={()=> handleModal()}><i className=' bi-x-lg cursor-pointer'></i></button>
            </div>
            <div className="basic-modal-body">
              <form onSubmit={handleSubmit} id="basic-modal-form">
                <label className='form-label'>Choose the brief</label>
                {loading && <div>Fetching briefs...</div>}
                {!loading && 
                    <select className="basic-modal-select" onChange={(e) => briefSelectionChange(e.target.value)}>
                      {briefs?.data?.map((brief) => {
                        return <option className="basic-modal-select-option" value={brief._id} key={brief._id}>{brief.briefName}</option>;
                      })}
                    </select>
                }
                <div className='mb-2 mt-4'>
                  <label className='form-label'>Add your message to the brief</label>
                  <textarea
                    className='form-control'
                    placeholder='Lorem ipsum...'
                    rows='8'
                    value={emailMessage}
                    onChange={handleChange} 
                    name='msg'
                  />
                </div>
              </form>
            </div>
            <div className="basic-modal-footer">
              <button type='submit' form='basic-modal-form' className='btn btn-sm btn_primary_black'>
                {loading ? (
                  <div className='text-xs'>
                    < EditProfileLoader />
                  </div>
                ) : (
                  'Send Brief Invite'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareBriefModal;