export const Loader = ({ style }) => {
  return <div className='spinner-border text-dark' style={style} role='status'></div>;
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

export const EditProfileLoader = ({ style }) => {
  return <div className='spinner-border3' role='status'></div>;
};

export const Loader2 = ({ style }) => {
  return <div className='spinner-border2 text-dark' style={style} role='status'></div>;
};
