const Footer = () => {

    const FooterLinks = {
        website: 'https://www.infinitelearning.id',
        facebook: 'https://www.facebook.com/infinitelearning.id',
        linkedin: 'https://www.linkedin.com/company/infinite-learning-indonesia/',
        youtube: 'https://www.youtube.com/@infinitelearningid',
        link5: '',
        link6: '',
        link7: '',
        link8: '',
        link9: '',
        link10: '',
    }

    return (
        <footer className='Footer bg-black text-white px-[10rem] pt-8 ml-48 transition-all duration-500'>
            <div className='flex flex-row justify-between gap-12 FooterContents'>
                <div className='min-w-[250px] w-full max-w-[45%] flex flex-col gap-4'>
                    <div>
                        <h4>Infinite Learning</h4>
                        <p className='cursor-auto select-text'>
                            Infinite Learning, a division of PT Kinema Systrans Multimedia (a subsidiary of Infinite
                            Studios), specializes in developing vocational training programs.
                        </p>
                    </div>
                    <div>
                        <strong className={`italic`}>Nongsa Digital Park</strong>
                        <p>Nongsa Digital Park Jl.Hang Lekiu KM 2 Sambau, Kecamatan Nongsa, Kota Batam, Kepulauan Riau
                            29466
                        </p>
                    </div>

                </div>
                <div className='flex flex-warp gap-24'>
                    <div className='flex flex-col gap-2 items-start'>
                        <h4>Contact Us</h4>
                        <button onClick={() => window.open(FooterLinks.website, '_blank')} className={`underline`}>Website</button>
                        <button onClick={() => window.open('', '_blank')} className={`underline`}>Contact Person</button>
                        <p className={`underline`}>+62896387111079</p>
                        <p className={`underline`}>Date Today</p>
                    </div>
                    <div className='flex flex-col gap-2 items-start'>
                        <h4>Stay in touch</h4>
                        <button onClick={() => window.open(FooterLinks.facebook, '_blank')} className={`underline`}>Facebook</button>
                        <button onClick={() => window.open(FooterLinks.linkedin, '_blank')} className={`underline`}>Linkedin</button>
                        <button onClick={() => window.open(FooterLinks.youtube, '_blank')} className={`underline`}>YouTube</button>
                    </div>
                </div>
            </div>
            <div></div>
            <div className="flex justify-center gap-8 py-12">
                2024 &copy; Infinite Learning, All Rights Reserved
            </div>
        </footer>
    )
}
export default Footer
