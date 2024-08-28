import { fetchFaqList } from '@/services/fetchFaqList'
import { Accordion } from '@/ui/Accordion'

export const Faq = async () => {
    const faq = await fetchFaqList()

    if (!faq) return

    return (
        <section className="m-auto flex w-full max-w-3xl flex-col gap-10 px-5 pb-[66px] pt-[44px] lg:pb-[88px]">
            <div>
                <h3 className="mb-4 text-center text-[28px] font-bold leading-[42px] lg:text-32px lg:leading-[48px]">
                    FAQ
                </h3>
                <p className="m-auto max-w-2xl p-3 text-center text-[14px] font-medium leading-6 text-base600 lg:text-base lg:leading-7">
                    Masz pytania? Sprawdź odpowiedzi na najczęściej zadawane pytania lub{' '}
                    <a
                        href="/contact"
                        className="text-orange-500 font-semibold no-underline"
                    >
                        skontaktuj się
                    </a> z nami, aby uzyskać dodatkową pomoc.
                </p>
            </div>
            <Accordion data={faq} />
        </section>
    )
}
