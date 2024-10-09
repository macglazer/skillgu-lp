import {
    CtaDedicated,
    Faq,
    Features,
    HeroBanner,
    MentorsList,
    Reviews,
} from '@/app/_components';
import CookiePopup from "@/ui/cookiePopup/CookiePopup";
import Script from "next/script";


type HomePageType = {
    readonly searchParams: {
        cat: string
        reviewId: string
    }
}

export default function HomePage({ searchParams }: HomePageType) {
    const currentCategory = searchParams.cat?.toString() ?? '';
    const reviewId = searchParams?.reviewId?.toString() ?? '';

    return (
        <>
            <Script
                id="Cookiebot"
                src="https://consent.cookiebot.com/uc.js"
                data-cbid="da8b4a6b-fa8c-4952-85d3-4d1a4c68916a"
                type="text/javascript"
                strategy="afterInteractive"
            />
            <HeroBanner />
            <Features />
            <MentorsList currentCategory={currentCategory} />
            <Reviews reviewId={reviewId} />
            <Faq />
            <CtaDedicated />
        </>
    )
}
