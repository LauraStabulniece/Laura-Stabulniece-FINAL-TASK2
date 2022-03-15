import locationIcon from '@iconify/icons-mdi/map-marker-radius-outline'
import phoneIcon from '@iconify/icons-mdi/phone-outline'
import emailIcon from '@iconify/icons-mdi/email-multiple-outline'

function getContactsArticles() {
    return [
        {
            title: 'A d d r e s s',
            description: 'EartH',
            icon: locationIcon,
        },
        {
            title: 'E m a i l',
            description: 'lets better chat',
            icon: emailIcon,
        },
        {
            title: 'P h o n e',
            description: 'lets better chat',
            icon: phoneIcon,
        },
    ]
}

export default getContactsArticles