
export const WELCOME_INSTRUCTIONS_MESSAGES = {
    WELCOME_INSTRUCTIONS: [
        { 
            ICON: 'home',
            LABEL: 'Boas Vindas',
            DESCRIPTION: `Aqui você encontra orientações sobre como acessar os módulos da nossa plataforma.`
        },
        { 
            ICON: 'person_add',
            LABEL: 'Cadastrar novo',
            DESCRIPTION: `Aqui você pode cadastrar um novo usuário que terá acesso a nossa plataforma.`
        },
          { 
            ICON: 'lists',
            LABEL: 'Lista de cadastrados',
            DESCRIPTION: `Aqui você pode visualizar todos os usuários que estão cadastrados na nossa plataforma.`
        }
    ]
};

export const WELCOME_MESSAGES = {
    SCREEN_TITLE: 'Seja bem vindo!',
    SCREEN_SUBTITLE: `Essa é a home da plataforma de cadastros online de novos usuários. Aqui você pode gerenciar seus usuários de forma eficiente.
                      Siga os passos abaixo para poder criar e gerenciar os usuários:`,
    INSTRUCTIONS_LIST_TITLE: 'Orientações para acesso aos módulos:',
    ARCHITETURE_INFORMATION: `Essa plataforma foi desenvolvida em angular 15 com module federation para gerenciar sua arquitetura de Micro Frontends.`,
    DESIGN_INFORMATION: `Seu layout foi desenvolvido usando angular material + bootstrap para acelerar o processo de 
                         desenvolvimento e ter um design system compartilhado entre seus módulos.`,
    ...WELCOME_INSTRUCTIONS_MESSAGES
};
