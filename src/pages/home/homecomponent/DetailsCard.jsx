function DetailsCard({cardLogo, addStyle, isHeading=false, para, isReverse=false}) {
    return (
        <div className={`${isReverse ? 'flex-row-reverse' : ''} ${addStyle} flex items-center w-full gap-20`}>
            <img src={cardLogo} alt="Image for details" className='h-70 w-90 bg-cover shadow-[0px_0px_30px_#000]' />
            <div>
                {isHeading ? <h1 className='text-orange-400 text-4xl font-semibold mb-2'>Who i'm I</h1> : ''}
                <p className={`${isReverse ? 'text-justify' : ''}  text-gray-300 text-justify text-lg `}>{para}</p>
            </div>
        </div>
    );
}

export default DetailsCard;