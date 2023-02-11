import {initialState, profileReducer, setProfileAC} from "./profile-reducer";
import {setLoadingStatusAC} from "./profile-reducer";


const profileInitialState = initialState
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
    'status': '',
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
    expect(newProfileState.displayedProfile!.userId).toBe(31)
    expect(newProfileState.displayedProfile!.aboutMe).not.toBe('Programmer')
})