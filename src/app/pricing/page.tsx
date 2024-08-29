import { FaCheckCircle } from 'react-icons/fa';
import { StarIcon } from "@/app/assets/icons/StarIcon";
import { KingIcon } from '@/app/assets/icons/KingIcon';

const Pricing = async () => {
    return (
        <section className="m-auto flex w-full max-w-6xl flex-col gap-10 p-[44px] px-5 lg:px-0">
            <h3 className="text-center text-[36px] font-bold leading-[1.2] tracking-normal lg:text-5xl lg:leading-[72px] text-primary mb-10">
                Cennik
            </h3>
            <div className="flex flex-col lg:flex-row justify-center gap-8">
                <div className="flex flex-col items-center p-10 border rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full max-w-xs lg:max-w-sm">
                    <div className="flex items-center justify-center mb-4">
                        <span className="w-10 h-10"></span> {/* Placeholder dla braku ikony */}
                        <h4 className="text-[24px] font-bold tracking-normal lg:text-4xl lg:leading-[48px] text-primary ml-2">
                            Darmowy
                        </h4>
                    </div>
                    <p className="text-[48px] font-semibold text-[#252B61] mb-2">0 zł <span className="text-[18px] font-normal text-base600">/ miesiąc</span></p>
                    <button className="bg-secondary text-white py-4 px-12 rounded-full font-semibold mb-6">
                        Wybierz ten plan
                    </button>
                    <h5 className="text-[18px] font-semibold mb-4 text-primary">
                        Co ten plan zawiera?
                    </h5>
                    <ul className="list-none text-base600 space-y-2 text-left">
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> Brak stałej opłaty
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> Pełny dostęp do aplikacji
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> 20% prowizji od spotkania
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> 15% prowizji od mentoringu
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> Brak darmowych spotkań
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center p-10 border rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full max-w-xs lg:max-w-sm">
                    <div className="flex items-center justify-center mb-4">
                        <StarIcon className="w-10 h-10" />
                        <h4 className="text-[24px] font-bold tracking-normal lg:text-4xl lg:leading-[48px] text-primary ml-2">
                            Basic
                        </h4>
                    </div>
                    <p className="text-[48px] font-semibold text-[#252B61] mb-2">69 zł <span className="text-[18px] font-normal text-base600">/ miesiąc</span></p>
                    <button className="bg-secondary text-white py-4 px-12 rounded-full font-semibold mb-6">
                        Wybierz ten plan
                    </button>
                    <h5 className="text-[18px] font-semibold mb-4 text-primary">
                        Co ten plan zawiera?
                    </h5>
                    <ul className="list-none text-base600 space-y-2 text-left">
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> Stała opłata miesięczna
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> Pełny dostęp do aplikacji
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> 15% prowizji od spotkania
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> 10% prowizji od mentoringu
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> 5 darmowych spotkań w miesiącu
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center p-10 border rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full max-w-xs lg:max-w-sm">
                    <div className="flex items-center justify-center mb-4">
                        <KingIcon className="w-10 h-10" />
                        <h4 className="text-[24px] font-bold tracking-normal lg:text-4xl lg:leading-[48px] text-primary ml-2">
                            Pro
                        </h4>
                    </div>
                    <p className="text-[48px] font-semibold text-[#252B61] mb-2">130 zł <span className="text-[18px] font-normal text-base600">/ miesiąc</span></p>
                    <button className="bg-secondary text-white py-4 px-12 rounded-full font-semibold mb-6">
                        Wybierz ten plan
                    </button>
                    <h5 className="text-[18px] font-semibold mb-4 text-primary">
                        Co ten plan zawiera?
                    </h5>
                    <ul className="list-none text-base600 space-y-2 text-left">
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> Stała opłata miesięczna
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> Pełny dostęp do aplikacji
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> 0% prowizji od spotkania
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> 5% prowizji od mentoringu
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-primary mr-2" /> Darmowe spotkania bez limitu
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
