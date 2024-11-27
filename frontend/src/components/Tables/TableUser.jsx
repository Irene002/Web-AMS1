const TableUser = ({key, nomor, nama, jabatan, divisi, status, jamMasuk, jamKeluar, Lokasi}) => {
  return (
    <>
    <table className="w-full mt-8">
        <thead>
            <tr>
                <th>No.</th>
                <th>Nama</th>
                <th>Jabatan</th>
                <th>Divisi</th>
                <th>Status</th>
                <th>Jam Masuk</th>
                <th>Jam Keluar</th>
                <th>Lokasi</th>
            </tr>
        </thead>
        <tbody>
            <tr key={key}>
                <td>{nomor}</td>
                <td>{nama}</td>
                <td>{jabatan}</td>
                <td>{divisi}</td>
                <td>{status}</td>
                <td>{jamMasuk}</td>
                <td>{jamKeluar}</td>
                <td>{Lokasi}</td>
            </tr>
        </tbody>
    </table>
    </>
  )
}

export default TableUser