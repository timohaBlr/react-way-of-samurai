import {profileReducer, setProfileAC} from "./profile-reducer";
import {setLoadingStatusAC} from "./profile-reducer";


const profileInitialState = {
    user: {
        aboutMe: 'Programmer',
        contacts: {
            facebook: null,
            website: 'websiteUrl',
            vk:  null,
            twitter:  null,
            instagram:  null,
            youtube:  null,
            github:  null,
            mainLink:  null,
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'React',
        fullName: 'Timofei',
        userId: '1',
        photos: {
            small: null,
            large:  null,
        },
    },
    loadingStatus: false,
    posts: [
        {id: 1, message: 'Hello', likesCount: 4},
        {id: 2, message: 'Bonjour', likesCount: 5},
        {id: 3, message: 'Privet', likesCount: 6},
    ],
    newPostText: '',
};
const response = {
    "aboutMe": null,
    "contacts": {
        "facebook": null,
        "website": null,
        "vk": null,
        "twitter": null,
        "instagram": null,
        "youtube": null,
        "github": null,
        "mainLink": null
    },
    "lookingForAJob": false,
    "lookingForAJobDescription": null,
    "fullName": "skysoul",
    "userId": '31',
    "photos": {
        "small": null,
        "large": null
    }
}

test('loading status should be true while loading', () => {
    const newProfileState = profileReducer(profileInitialState, setLoadingStatusAC(true))

    expect(profileInitialState).not.toBe(newProfileState)
    expect(newProfileState.loadingStatus).toBeTruthy()
    expect(profileInitialState.loadingStatus).toBeFalsy()
})

test('profile info should be changed', ()=> {
    const newProfileState = profileReducer(profileInitialState, setProfileAC(response))

    expect(profileInitialState).not.toBe(newProfileState)
    expect(newProfileState.user.userId).toBe(31)
    expect(newProfileState.user.aboutMe).not.toBe('Programmer')
})