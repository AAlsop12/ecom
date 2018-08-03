import { 
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
    return({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 4.90,
                orderNumber: 'AE309AGNO',
                orderDate: new Date(),
                creditCard: '0000',
                user: {
                    name: 'Phil Greenwood',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 6.39,
                orderNumber: 'AE309AGNO',
                orderDate: new Date(),
                creditCard: '0000',
                user: {
                    name: 'Angela Ludlow',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 2,
                total: 99.80,
                orderNumber: 'AE309AGNO',
                orderDate: new Date(),
                creditCard: '0000',
                user: {
                    name: 'Crumbles Swallow',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 3,
                total: 4.90,
                orderNumber: 'AE309AGNO',
                orderDate: new Date(),
                creditCard: '0000',
                user: {
                    name: 'armstead down',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 4,
                total: 4.90,
                orderNumber: 'AE309AGNO',
                orderDate: new Date(),
                creditCard: '0000',
                user: {
                    name: 'chloe smalls',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 5,
                total: 4.90,
                orderNumber: 'AE309AGNO',
                orderDate: new Date(),
                creditCard: '0000',
                user: {
                    name: 'Franz Nesnahoj',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 6,
                total: 4.90,
                orderNumber: 'AE309AGNO',
                orderDate: new Date(),
                creditCard: '0000',
                user: {
                    name: 'Clayton Menace',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 7,
                total: 4.90,
                orderNumber: 'AE309AGNO',
                orderDate: new Date(),
                creditCard: '0000',
                user: {
                    name: 'Penelope Jarvis',
                    shippingAddress: '1234 West State Street'
                }
            },
            

        ]
    })
}