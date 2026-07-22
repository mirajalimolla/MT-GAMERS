function DetailsCard({cardLogo, addStyle, isHeading=false, para, isReverse=false}) {
    return (
        <div className={`${isReverse ? 'flex-row-reverse' : ''} ${addStyle} md:flex md:items-center w-full m-auto gap-20`}>
            <img src={cardLogo} alt="Image for details" className='w-63 h-60 m-auto md:h-70 md:w-90 object-cover shadow-[0px_0px_30px_#000]' />
            <div>
                {isHeading ? <h1 className='text-orange-400 text-2xl sm:text-4xl font-semibold mb-2'>Who i'm I</h1> : ''}
                <p className={`${isReverse ? 'text-justify' : ''}  text-gray-300 text-justify text-[15px] sm:text-lg `}>{para}</p>
            </div>
        </div>
    );
}

export default DetailsCard;