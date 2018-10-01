import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TextFieldGroup from '../Common/TextFieldGroup';
import TextAreaFieldGroup from '../Common/TextAreaFieldGroup';
import InputGroup from '../Common/InputGroup';
import SelectListGroup from '../Common/SelectListGroup';
import { createProfile } from '../../actions/profileAction';


class CreateProfile extends Component{

    state = {
        displaySocial: '',
        handle: '',
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubUsername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: '',
        errors: {}

    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const profileData = {
            handle: this.state.handle,
            company: this.state.company,
            website: this.state.website,
            location: this.state.location,
            status: this.state.status,
            skills: this.state.skills,
            githubUsername: this.state.githubUsername,
            bio: this.state.bio,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            youtube: this.state.youtube,
            instagram: this.state.instagram
        };
        this.props.createProfile(profileData, this.props.history)
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {

        const { errors, displaySocial } = this.state;

        let socialInputs;

        if(displaySocial) {
            socialInputs = (
                <div>
                    <InputGroup
                        placeholder={'Twitter Profile URL'}
                        name={'twitter'}
                        icon={'fab fa-twitter'}
                        value={this.state.twitter}
                        onChange={this.onChange}
                        error={errors.twitter}
                    />
                    <InputGroup
                        placeholder={'Facebook Profile URL'}
                        name={'facebook'}
                        icon={'fab fa-facebook'}
                        value={this.state.facebook}
                        onChange={this.onChange}
                        error={errors.facebook}
                    />
                    <InputGroup
                        placeholder={'Linkedin Profile URL'}
                        name={'linkedin'}
                        icon={'fab fa-linkedin'}
                        value={this.state.linkedin}
                        onChange={this.onChange}
                        error={errors.linkedin}
                    />
                    <InputGroup
                        placeholder={'Youtube Profile URL'}
                        name={'Youtube'}
                        icon={'fab fa-youtube'}
                        value={this.state.youtube}
                        onChange={this.onChange}
                        error={errors.youtube}
                    />
                    <InputGroup
                        placeholder={'Instagram Profile URL'}
                        name={'instagram'}
                        icon={'fab fa-instagram'}
                        value={this.state.instagram}
                        onChange={this.onChange}
                        error={errors.instagram}
                    />
                </div>
            )
        } else {
            socialInputs = null;
        }


        const options = [
            { label: '* Select Professional Status', value: 0 },
            { label: 'Developer', value: 'Developer' },
            { label: 'Junior Developer', value: 'Junior Developer' },
            { label: 'Senior Developer', value: 'Senior Developer' },
            { label: 'Manager', value: 'Manager' },
            { label: 'Student of Learning', value: 'Student of Learning' },
            { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
            { label: 'Intern', value: 'Intern' },
            { label: 'Other', value: 'Other' },
        ];

        return (
            <div className={'create-profile'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-md-8 m-auto'}>
                            <h1 className={'display-4 text-center'}>Create you profile</h1>
                            <p className={'lead text-center'}>
                                Let's get some information to make your profile stand out
                            </p>
                            <small className={'d-block pb-3'}>* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    placeholder={'* Profile Handler'}
                                    name={'handle'}
                                    value={this.state.handle}
                                    onChange={this.onChange}
                                    error={errors.handle}
                                    info={'A unique handle for profile URL. Your full name, company name'}
                                />
                                <SelectListGroup
                                    placeholder={"Status"}
                                    name={'status'}
                                    value={this.state.status}
                                    options={options}
                                    onChange={this.onChange}
                                    error={errors.status}
                                    info={'Give us an idea of where you are at in your career'}
                                />
                                <TextFieldGroup
                                    placeholder={'Company'}
                                    name={'company'}
                                    value={this.state.company}
                                    onChange={this.onChange}
                                    error={errors.company}
                                    info={'A unique handle for profile URL. Your full name, company name'}
                                />
                                <TextFieldGroup
                                    placeholder={'Website'}
                                    name={'website'}
                                    value={this.state.website}
                                    onChange={this.onChange}
                                    error={errors.website}
                                    info={'A unique handle for profile URL. Your full name, company name'}
                                />
                                <TextFieldGroup
                                    placeholder={'Location'}
                                    name={'location'}
                                    value={this.state.location}
                                    onChange={this.onChange}
                                    error={errors.location}
                                    info={'A unique handle for profile URL. Your full name, company name'}
                                />
                                <TextFieldGroup
                                    placeholder={'* Skills'}
                                    name={'skills'}
                                    value={this.state.skills}
                                    onChange={this.onChange}
                                    error={errors.skills}
                                    info={'A unique handle for profile URL. Your full name, company name'}
                                />
                                <TextFieldGroup
                                    placeholder={'Github Username'}
                                    name={'githubusername'}
                                    value={this.state.githubusername}
                                    onChange={this.onChange}
                                    error={errors.githubusername}
                                    info={'A unique handle for profile URL. Your full name, company name'}
                                />
                                <TextAreaFieldGroup
                                    placeholder={'Short bio'}
                                    name={'bio'}
                                    value={this.state.bio}
                                    onChange={this.onChange}
                                    error={errors.bio}
                                    info={'A unique handle for profile URL. Your full name, company name'}
                                />
                                <div className={'mb-3'}>
                                    <button
                                        type={'button'}
                                        className={'btn btn-light'}
                                        onClick={() => {
                                            this.setState(prevState => ({
                                                displaySocial: !prevState.displaySocial
                                            }))
                                        }}
                                    >
                                        Add Social Network Links
                                    </button>
                                    <span className={'text-muted'}>Optional</span>
                                </div>
                                {socialInputs}
                                <input
                                    type={'submit'}
                                    value={'submit'}
                                    className={'btn btn-info btn-block mt-4'}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { createProfile })(withRouter(CreateProfile));