import { FaCheckCircle } from 'react-icons/fa';

const Pricing = async () => {
    return (
        <section className="m-auto flex w-full max-w-6xl flex-col gap-10 p-[44px] px-5 lg:px-0">
            <h3 className="text-center text-[32px] font-bold -tracking-[1px] lg:text-5xl lg:leading-[72px] lg:-tracking-[2px] text-primary">
                Cennik
            </h3>
            <div className="flex flex-col lg:flex-row justify-center gap-8">
                <div className="flex flex-col items-center p-6 border rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                    <h4 className="text-[24px] font-bold -tracking-[1px] lg:text-4xl lg:leading-[48px] lg:-tracking-[1.5px] mb-4 text-primary">
                        Free
                    </h4>
                    <p className="text-4xl font-bold text-secondary mb-2">0 zł</p>
                    <p className="text-base text-base600 mb-4">
                        Brak opłat, płacisz tylko prowizje od zrealizowanych spotkań
                    </p>
                    <button className="bg-secondary text-white py-2 px-12 rounded-full font-semibold mb-6">
                        Wybierz ten plan
                    </button>
                    <h5 className="text-[18px] font-semibold -tracking-[0.5px] mb-3 text-primary">
                        Co ten plan zawiera?
                    </h5>
                    <ul className="list-none text-base600 space-y-2">
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> Darmowy dostęp lifetime
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> 5 darmowych spotkań
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> Prowizja 20% od spotkania
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> 15% od mentorshipu
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center p-6 border rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                    <h4 className="text-[24px] font-bold -tracking-[1px] lg:text-4xl lg:leading-[48px] lg:-tracking-[1.5px] mb-4 text-primary">
                        Mid
                    </h4>
                    <p className="text-4xl font-bold text-secondary mb-2">69 zł</p>
                    <p className="text-base text-base600 mb-4">
                        Płatność z góry za każdy miesiąc. Podane ceny są cenami netto.
                    </p>
                    <button className="bg-secondary text-white py-2 px-12 rounded-full font-semibold mb-6">
                        Wybierz ten plan
                    </button>
                    <h5 className="text-[18px] font-semibold -tracking-[0.5px] mb-3 text-primary">
                        Co ten plan zawiera?
                    </h5>
                    <ul className="list-none text-base600 space-y-2">
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> 10 darmowych spotkań
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> Prowizja 15% od spotkania
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> Prowizja 10% od mentorshipu
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center p-6 border rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                    <h4 className="text-[24px] font-bold -tracking-[1px] lg:text-4xl lg:leading-[48px] lg:-tracking-[1.5px] mb-4 text-primary">
                        Pro
                    </h4>
                    <p className="text-4xl font-bold text-secondary mb-2">130 zł</p>
                    <p className="text-base text-base600 mb-4">
                        Płatność z góry za każdy miesiąc. Podane ceny są cenami netto.
                    </p>
                    <button className="bg-secondary text-white py-2 px-12 rounded-full font-semibold mb-6">
                        Wybierz ten plan
                    </button>
                    <h5 className="text-[18px] font-semibold -tracking-[0.5px] mb-3 text-primary">
                        Co ten plan zawiera?
                    </h5>
                    <ul className="list-none text-base600 space-y-2">
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> No limit darmowych spotkań
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> Bez prowizji za spotkanie
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> Bez prowizji za mentorship
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
