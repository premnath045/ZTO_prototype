import { FileEarmark,Check,Download } from 'react-bootstrap-icons';
import ProgressBar from 'react-bootstrap/ProgressBar';
export const Loader = ({ style }) => {
  return <div className='spinner-border text-dark' style={style} role='status'></div>;
};
export const FileUploadComponent = ({ name, filesize, percentage }) => {
  return (
    <div className='mt-2 file-upload'>
      <div className='file-preview'>
        <FileEarmark color='#00A46F' size={12} />
      </div>
      <div className='file-name-container-pw'>
        <div className='file-name-pw'>{name}</div>
        <div className='file-size-pw'>{filesize}</div>
        <div className='progress-bar-div-pw'>
          <div className='progress-bar-pw'> 
          <ProgressBar now={percentage}  />
          </div>
          <div>{percentage} %</div>
        </div>
      </div>
      {percentage === 100 && (
        <div className='success-upload'>
          <Check color='#fff' />
        </div>
      )}
    </div>
  );
};
export const FilePreviewComponent = ({ name, filesize, url }) => {
  return (
    <div className='mt-2 file-upload bg-[#fff]'>
      <div className='file-preview'>
        <FileEarmark color='#00A46F' size={12} />
      </div>
      <div className='file-name-container-pw '>
        <div className='file-name-pw'>{name}</div>
        <div className='file-size-pw'>{filesize}</div>
      </div>
      {url && (
         <div className='download-upload ml-auto'>
          <a href={url} target='_blank' rel='noreferrer'>
            <Download color='#00A46F' size={14} />
          </a>
         </div>
          
        
      )}
    </div>
  );
};
export const ImgLoader = () => {
  return (
    <div
      className='spinner-border text-dark'
      style={{
        width: '15px',
        height: '15px',
        border: '2px solid',
        borderRight: '2px solid transparent',
      }}
      role='status'></div>
  );
};

export const ImgLoader2 = () => {
  return (
    <div
      className='spinner-border text-white'
      style={{
        width: '15px',
        height: '15px',
        border: '2px solid',
        borderRight: '2px solid transparent',
      }}
      role='status'></div>
  );
};

export const EditProfileLoader = ({ style }) => {
  return <div className='spinner-border3' role='status' style={style}></div>;
};

export const Loader2 = ({ style }) => {
  return <div className='spinner-border2 text-dark' style={style} role='status'></div>;
};