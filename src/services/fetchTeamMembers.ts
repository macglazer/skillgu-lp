import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

type ResponseData = {
    members: Member[]
    total: number
}
export type SpecialVariant = 'success' | 'warning' | 'error'
export type Member = {
    avatar_url: string
    description: string
    id: string
    name: string
    title: string
    username: string
    socials: {
        skillgu: string
        linkedin: string
    }
}

export const fetchTeamMembers = async (): Promise<ResponseData> => {
    try {
        // TODO
        //     const response = await axios.get(
        //       '/api/members/,
        //     )

        //const { mentors } = response.data
        //return mentors;
        const members = [
            {
                avatar_url:
                    'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
                description:
                    'Pomysłodawca, założyciel oraz jeden z programistów Skillgu. Od zawsze planowałem założyć własną firmę, a Skillgu jest realizacją tej wizji.' +
                    ' Jako członek zespołu programistycznego, aktywnie uczestniczę w rozwijaniu naszej platformy, łącząc technologię z moją wizją rozwoju kariery. Głęboko wierzę, że praca z mentorami przyspiesza rozwój zawodowy, pomaga w pokonywaniu barier i odblokowywaniu potencjału na każdym etapie kariery.',
                id: '1',
                name: 'Maciej Glazer',
                title: 'CEO Skillgu',
                username: 'mac_glaz',
                socials: {
                    skillgu: 'https://www.skillgu.com/',
                    linkedin: 'https://www.linkedin.com/',
                },
            },
            {
                avatar_url:
                    'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
                description:
                    'Współpomysłodawca, a w bieżącej pracy zajmuje się kwestami związanymi z rozwojem funkcjonalnym platformy, testowaniem i badaniem nowych rozwiązań oraz obszarem doświadczeń użytkownika (UX). Dzielnie „walczy” też na polu marketingu, bazując na swoim kilkuletnim doświadczeniu związanym z PR, wystąpieniami publicznymi i kształtowaniu wizerunku medialnego. ',
                id: '2',
                name: 'Artur Barański',
                title: 'Co-Founder',
                username: 'art_baranski',
                socials: {
                    skillgu: 'https://www.skillgu.com/',
                    linkedin: 'https://www.linkedin.com/in/artur-baranski/',
                },
            },
            {
                avatar_url:
                    'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
                description:
                    'Główny programista i CTO Skillgu, wybitny inżynier oprogramowania, twórca „mentosów”. Dołączył do zespołu, wnosząc ogromną wiedzę i doświadczenie, które szybko uczyniły go nieocenionym liderem technologicznym.' +
                    ' Jego zdolność do rozwiązywania najtrudniejszych problemów programistycznych oraz głęboka znajomość technologii sprawiają, że jest niezastąpiony w rozwoju naszej platformy. Jako CTO, odpowiada za strategiczne decyzje technologiczne i kierowanie zespołem programistycznym, dążąc do ciągłego ulepszania i innowacji w Skillgu.',
                id: '3',
                name: 'Artur Dudzik',
                title: 'CTO',
                username: 'dudziassoo',
                socials: {
                    skillgu: 'https://www.skillgu.com/',
                    linkedin: 'https://www.linkedin.com/',
                },
            },
            // {
            //   avatar_url:
            //     'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
            //   description:
            //     'Front-end Developer.\n' +
            //       'Technologies: \n' +
            //       'HTML, CSS, RWD, JavaScript, TypeScript, FetchAPI, Next.js, React, Redux, React Testing Library, narzędzia Git, GitHub, GitLab, Webpack, Jira.',
            //   id: '4',
            //   name: 'Małgorzata Kowacka',
            //   title: 'Frontend Developer',
            //   username: 'gosia_kow',
            //   socials: {
            //     skillgu: 'https://www.skillgu.com/',
            //     linkedin: 'https://www.linkedin.com/in/malgorzata-kowacka/',
            //   },
            // },
            // {
            //   avatar_url:
            //     'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
            //   description:
            //     'Jestem Front Developerm z 10-letnim doświadczeniem',
            //   id: '5',
            //   name: 'Radosław Żaczkiewicz',
            //   title: 'Senior React Developer',
            //   username: 'rado_ms',
            //   socials: {
            //     skillgu: 'https://www.skillgu.com/',
            //     linkedin: 'https://www.linkedin.com/in/rados%C5%82aw-%C5%BCaczkiewicz-2534251bb/',
            //   },
            // },
            // {
            //   avatar_url:
            //     'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
            //   description:
            //     'Jestem UI Designerem z 10-letnim doświadczeniem, lorem ipsum dolor sit amet consectetur.',
            //   id: '6',
            //   name: 'Jan Mus',
            //   title: 'Frontend Developer',
            //   username: 'rob_maj',
            //   socials: {
            //     skillgu: '',
            //     linkedin: 'https://www.linkedin.com/',
            //   },
            // },
        ]
        return {
            members,
            total: 10,
        }
    } catch (error) {
        console.error('Error fetching mentors:', error)
        throw error
    }
}
