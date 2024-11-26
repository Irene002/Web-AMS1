const Footer = () => {
    return (
        <footer className='Footer bg-black text-white px-[10rem] pt-8 ml-48 transition-all duration-500'>
            <div className='flex warpjustify-between gap-8 FooterContents'>
                <div className='min-w-[250px] w-full max-w-[45%] flex flex-col gap-4'>
                    <div>
                    <h4>Infinite Learning</h4>
                    <p className='cursor-auto select-text'>
                    Infinite Learning, sebuah divisi dari PT Kinema Systrans Multimedia (Anak perusahaan Infinite Studios), berfokus pada pengembangan program pelatihan vokasi.
                    </p>
                    </div>
                    <div>
                    <strong className={`italic`}>Nongsa Digital Park</strong>
                    <p>Nongsa Digital Park Jl.Hang Lekiu KM 2 Sambau, Kecamatan Nongsa, Kota Batam, Kepulauan Riau 29466
                    </p>
                    </div>

                </div>
                <div className='flex flex-warp  gap-24'>
                    <div className=''>
                        <h4>Hubungi Kami</h4>
                </div>
                <div className=''>
                    <h4>Tetap Terhubung</h4>
                </div>
                </div>
            </div>
            <div></div>
            <div className="flex justify-center gap-8 py-8">
            2024 &copy; Infinite Learning, All Rights Reserved
            </div>
        </footer>
    )
}
export default Footer
