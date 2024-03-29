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
  const [filters, setFilters] = useState([]); // Initialize as an empty array

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const mapSearch = (selectedFilters) => {
    console.log('Filters: ', selectedFilters);
    setFilters(selectedFilters);
  };

  return (
    <AdminLayout>
      <div className="p-2">
        <TableHeader
          openModal={openModal}
          totalRows={totalRows}
          setSelectedTab={(tab) => setSelectedTab(tab)}
        />

        {/* Conditional rendering of identity portal table components */}
        {selectedTab === 'discovered' && (
          <ScanDataTable setTotalRows={setTotalRows} filters={filters} />
        )}
        {selectedTab === 'identities' && (
          <IdentityDataTable setTotalRows={setTotalRows} filters={filters} />
        )}
        {selectedTab === 'availableidentity' && (
          <AvailableIdentityTable setTotalRows={setTotalRows} setFilters={setFilters} />
        )}

        {/* Condition to show full screen popup modal */}
        {showModal && (
          <FullviewPopupModal
            showModal={showModal}
            closeModal={closeModal}
            mapSearch={mapSearch}
          />
        )}
      </div>
    </AdminLayout>
  );
}

export default IdentityPortal;