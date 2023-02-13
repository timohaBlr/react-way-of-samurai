import {setLoadingStatusAC, setLoggedInUserAC} from "./actions";
import {profileInitialState, profileReducer} from "./profile-reducer";


const profileInitialStateTest = profileInitialState
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
    const newProfileState = profileReducer(profileInitialStateTest, setLoadingStatusAC(true))

    expect(profileInitialStateTest).not.toBe(newProfileState)
    expect(newProfileState.loadingStatus).toBeTruthy()
    expect(profileInitialStateTest.loadingStatus).toBeFalsy()
})

test('profile info should be changed', ()=> {
    const newProfileState = profileReducer(profileInitialStateTest, setLoggedInUserAC(response))

    expect(profileInitialStateTest).not.toBe(newProfileState)
    expect(newProfileState.loggedInUser!.userId).toBe(31)
    expect(newProfileState.loggedInUser!.aboutMe).not.toBe('Programmer')
})