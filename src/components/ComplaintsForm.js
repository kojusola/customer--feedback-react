import React, { Component} from "react";
import Input from "./Input"
import Button from "./Button";
import TextArea from "./TextArea"
import Select from "./Select"
import FeedBack from "./feedback"

class ComplaintsForm extends Component{
    
    constructor(props){
        super(props);

        this.state ={
            fullName:"",
            email:"",
            reason:"",
            options:[
                "My account was debited Erroneously",
                "My card is expired",
                "My transaction failed",
                "Others"
            ],
            description:"",
            feedbackDetails:null,
            showFeedbackDetails: false
        }
        // this.handleFullNameChange = this.handleFullNameChange.bind(this)
    }
    // handleFullNameChange = (event) =>{
    //     this.setState ({
    //         fullName : event.target.value
    //     })
    //     // console.log(event.target.value)
    // }
    // handleEmailChange = (event) =>{
    //     this.setState({
    //         email: event.target.value
    //     })
    // }
    // handleReasonChange = (event) =>{
    //     this.setState({
    //         reason: event.target.value
    //     })
    // }
    handleInputChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleComplaintSubmission = (event)=>{
        event.preventDefault();
        const {fullName, email, reason, description} = this.state;
        const feedbackDetails = {
            fullName,
            email,
            reason,
            description
        }
        this.setState({feedbackDetails, showFeedbackDetails: true})
    }
    handleReset = (event) =>{
        event.preventDefault();

        this.setState({
            fullName:"",
            email:"",
            description:"",
            reason:"",
            showFeedbackDetails: false
        })
    }
    render(){
        return(
            <div className="d-flex flex-row mt-3">
                <form className="w-50 mr-3">
                <Input 
                name="fullName" 
                title=" Full Name" 
                inputType="text" 
                placeholder="Enter your name" 
                handleChange={this.handleInputChange} 
                value ={this.state.fullName}/>
                <Input 
                name="email" 
                title="Email" 
                inputType="text" 
                placeholder="Enter your email address" 
                handleChange={this.handleInputChange} 
                value ={this.state.email}/>
                <Select
                title="Reason For Contact"
                placeholder="Select a reason"
                name= "reason"
                value={this.state.reason}
                options={this.state.options}
                handleChange={this.handleInputChange}
                />
                <TextArea
                name="description"
                title="Description"
                rows={10}
                cols={10}
                value={this.state.description}
                handleChange={this.handleInputChange}
                placeholder="Enter a description"/>
                <Button
                onButtonClick={this.handleComplaintSubmission}
                title="Submit Complaint"
                backgroundColor="#27ae60"/>
                <Button
                onButtonClick={this.handleReset}
                title="Reset Form"
                backgroundColor="#7f8c8d"/>
                </form>
                <div className="mx-5">
                {this.state.showFeedbackDetails &&
                    <FeedBack
                    feedbackDetails={this.state.feedbackDetails}/>}
                </div>
            </div>
        )
    }
}

export default ComplaintsForm;