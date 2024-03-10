import React, {useEffect, useState} from 'react';
import AdminLayout from '../../components/admin-layout';
import TableHeader from '../../components/TableHeader/tableHeader';
import ScanDataTable from '../../components/dataTable/scanDataTable';
import IdentityDataTable from '../../components/dataTable/identityDataTable';
import FullviewPopupModal from '../../components/fullScreenPopup/popup';
import AvailableIdentityTable from '../../components/dataTable/availableIdentityTable';

function IdentityPortal() {

  const [totalRows, setTotalRows] = useState(0);
  const [selectedTab, setSelectedTab] = useState('discovered');
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <AdminLayout>
      <div className='p-2'>
        <TableHeader openModal={openModal} totalRows={totalRows} setSelectedTab={(tab) => setSelectedTab(tab)} />
        
        {/* conditional rendering of identity portal table components */}
        {selectedTab === 'discovered' && <ScanDataTable setTotalRows={setTotalRows} />}
        {selectedTab === 'identities' && <IdentityDataTable setTotalRows={setTotalRows} />}
        {selectedTab === 'availableidentity' && <AvailableIdentityTable setTotalRows={setTotalRows} />}

        {/* condition to show full screen popup modal */}
        {showModal && <FullviewPopupModal showModal={showModal} closeModal={closeModal} /> }

        {/* <FullviewPopupModal setShowModal={(show) => setShowModal(show)}/> */}

      </div>
    </AdminLayout>
  );
}

export default IdentityPortal;