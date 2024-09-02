import {TeamMemberCard} from '../_components/TeamMemberCard'
import {fetchTeamMembers, Member} from '@/services/fetchTeamMembers'

const About = async () => {
    const {members} = await fetchTeamMembers()

    if (!members) return

    return (
        <section className="m-auto flex w-full max-w-xl flex-col gap-10 p-[44px] px-5 md:max-w-fit lg:max-w-[1304px]">
            <h3 className="semibold text-[28px] font-bold leading-[42px] lg:text-[48px] lg:leading-[72px]">
                O nas
            </h3>

            <p className="text-[16px] lg:text-[18px] leading-7 text-base600 mb-10 text-justify">
                {/* Wyróżnienie nagłówków */}
                <span className="font-bold text-base800 block mt-6">Czym jest Skillgu?</span>
                Skillgu.com to platforma stworzona z myślą o tysiącach mentorów i trenerów online. Jest to przede
                wszystkim miejce gdzie dajemy możliwość przekazania źródła wiedzy dla osób, które chcą edukować się bezpośrednio z żywym
                człowiekiem, w formie konsultacji 1:1 lub małych grupach.
                Jest to jest jednocześnie uzupełnienie dla kursów i szkoleń wideo. W Skillgu umożliwiamy efektywne
                łączenie mentorów z mentee. Stawiamy szczególnie na tematykę z branży technicznej, programowanie, rozwój
                startupów, biznesu ,marketing, UX/UI czy zarządzania projektami oraz wiele innych kategorii. <br/><br/>
                <span className="font-bold text-base800 block mt-6">Dla kogo jest platforma?</span>
                Jeśli wciąż rozwijasz bazę swoich uczniów i chcesz zarabiać więcej to platforma Skillgu jest dla Ciebie.
                U nas znajdziesz tylko takich mentee, którzy są zainteresowani Twoimi skillami, bo stawiamy na branżowe
                specjalizacje techniczne.
                <br/><br/>
                Możliwe, że baza Twoich uczniów jest już wypełniona po brzegi i nie zabiegasz o nowe osoby. W takim
                wypadku również możemy współpracować. Przenosząc się do Skillgu wraz ze swoimi podopiecznymi wchodzisz
                na wyższy level organizacji pracy, co ułatwia codzienność Twoim podopiecznym, a sobie poprawiasz komfort
                działania – ujednolicona komunikacja, automatyczne wypłaty oraz planowanie i fakturowanie możesz mieć
                teraz w obrębie jednej platformy!
            </p>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
                {members?.map((item: Member) => (
                    <TeamMemberCard
                        key={item.id}
                        avatar_url={item.avatar_url}
                        description={item.description}
                        name={item.name}
                        id={item.id}
                        title={item.title}
                        username={item.username}
                        socials={item.socials}
                    />
                ))}
            </div>
        </section>
    )
}

export default About
