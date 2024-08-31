import { TeamMemberCard } from '../_components/TeamMemberCard'
import { fetchTeamMembers, Member } from '@/services/fetchTeamMembers'

const About = async () => {
    const { members } = await fetchTeamMembers()

    if (!members) return

    return (
        <section className="m-auto flex w-full max-w-xl flex-col gap-10 p-[44px] px-5 md:max-w-fit lg:max-w-[1304px]">
            <h3 className="semibold text-[28px] font-bold leading-[42px] lg:text-[48px] lg:leading-[72px]">
                O nas
            </h3>

            <p className="text-[16px] lg:text-[18px] leading-7 text-base600 mb-10 text-justify">
                Skillgu.com to platforma stworzona z myślą o tysiącach mentorów i trenerów online. Chcemy, aby była ona jednocześnie uzupełnieniem dla kursów i szkoleń wideo, jak również alternatywą dla osób, które chcą edukować się bezpośrednio z żywym człowiekiem. W Skillgu umożliwiamy efektywne łączenie mentorów z mentee, szczególnie z branży technicznych, startupów, marketingu, UX/UI oraz zarządzania projektami.
                <br/><br/>
                Jeśli wciąż rozwijasz bazę swoich uczniów i chcesz zarabiać więcej to platforma Skillgu jest dla Ciebie. U nas znajdziesz tylko takich mentee, którzy są zainteresowani Twoimi skillami, bo stawiamy na branżowe specjalizacje techniczne.
                <br/><br/>
                Możliwe, że baza Twoich uczniów jest już wypełniona po brzegi i nie zabiegasz o nowe osoby. W takim wypadku również możemy współpracować. Przenosząc się do Skillgu wraz ze swoimi podopiecznymi wchodzisz na wyższy level organizacji pracy, co ułatwia Ci codzienność, a swoim klientom dostarczasz większą wartość  - komunikacja, wypłaty, planowanie i fakturowanie możesz mieć teraz w obrębie platformy Skillgu!
                <br/><br/>
                Skillgu.com to miejsce, gdzie można znaleźć wykwalifikowanych mentorów, którzy pomogą Ci w kluczowych momentach kariery – czy to przygotowanie do rozmowy kwalifikacyjnej, awans w pracy, zmiana ścieżki zawodowej lub indywidualne pokonywanie wyzwań. Nasza platforma oferuje wsparcie, które pomoże Ci nie tylko wyjść z trudnych sytuacji, ale także zbudować silne fundamenty pod przyszłe sukcesy.
                <br/><br/>
                Wybieraj najlepszego dla Ciebie mentora, spośród liderów z branży technicznej! Wysoka skuteczność dzięki precyzyjnej specjalizacji platformy.
                <br/><br/>
                Wykorzystujemy wbudowany kalendarz do zarządzania sesjami mentoringowymi, co pozwala na łatwe planowanie i śledzenie postępów. Płacisz tylko zweryfikowanym mentorom, bo u nas nie ma trenerów bez ich wcześniejszego sprawdzenia.
                Dołącz do Skillgu.com i rozwijaj swoją karierę z najlepszymi mentorami w branży!
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
