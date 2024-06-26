import React from 'react'
import { useParams , Link } from 'react-router-dom'
import upVotes from '../../../assets/upVotes.svg'
import downVotes from '../../../assets/downVotes.svg'
import './questions.css'
import Avatar from '../../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'

const QuestionsDetails = () => {

    const{ id } = useParams();
    
    var questionList = [
        {
          _id:'1',
          upVotes:3,
          downVotes:2,
          noOfAnswers:2,
          questionTitle:"what is a function",
          questionBody: "It meant to be",
          questionTags:["java","node js","react js","mongo db"],
          userPosted:"mano",
          userId:1,
          askedOn:"jan 1",
          answer : [{
            answerBody:"Answer",
            userAnswered:"Kumar",
            answeredOn:"jan 2",
            userId:2,
          }]
        },{
          _id:'2',
          upVotes:4,
          downVotes:2,
          noOfAnswers:0,
          questionTitle:"what is a function2",
          questionBody: "It meant to be",
          questionTags:["java","node js","react js","mongo db"],
          userPosted:"mano",
          askedOn:"jan 1",
          userId:1,
          answer : [{
            answerBody:"Answer",
            userAnswered:"Kumar",
            answeredOn:"jan 2",
            userId:2,
          }]
        },{
          _id:'3',
          upVotes:3,
          downVotes:2,
          noOfAnswers:0,
          questionTitle:"what is a function3",
          questionBody: "It meant to be",
          questionTags:["java","javascript","R","mongo db"],
          userPosted:"mano",
          askedOn:"jan 1",
          userId:1,
          answer : [{
            answerBody:"Answer",
            userAnswered:"Kumar",
            answeredOn:"jan 2",
            userId:2,
          }]
        }
      ]
  return (
    <div>
        <div className="question-details-page">
        {
            questionList === null ?
            <h1>Loading...</h1> :
            <>
            {
                questionList.filter(question => question._id === id).map(question => (
                    <div key={question._id}>
                      
                        <section className='question-details-container'>
                            <h1>{question.questionTitle}</h1>
                            <div className='question-details-container-2'>
                                <div className='question-votes'>
                                    <img src={upVotes} alt=""  width='18'className='votes-icon' />
                                    <p>{question.upVotes - question.downVotes}</p>
                                    <img src={downVotes} alt="" width='18' className='votes-icon' />
                                </div>
                                <div style={{width:"100%" }}>

                                <p className='question-body'>{question.questionBody}</p>
                                <div className="question-details-tags">
                                    {
                                        question.questionTags.map((tag) => (

                                        
                                        <p key={tag}>{tag}</p>
                                    ))
                                    }
                                </div>
                                <div className="question-action-user">
                                    <div className='share-delete-btn'>
                                        <button type='button'> Share</button>
                                        <button type='button'>Delete</button>
                                    </div>
                                    <div>
                                        <p>asked {question.askedOn}</p>
                                        <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                    <Avatar backgroundColor="orange" px='8px' py='5px' >
                                        {
                                            question.userPosted.charAt(0).toUpperCase()
                                        }
                                    </Avatar>
                                    <div>
                                        {question.userPosted}
                                    </div>
                                        </Link>

                                    </div>
                                </div>
                                </div>
                            </div>
                            </section>  
                            {
                                question.noOfAnswers !== 0 && (
                                    <section>
                                        <h3>{question.noOfAnswers} answers</h3>
                                        <DisplayAnswer key={question._id} question = {question} />
                                    </section>
                                )
                            }
                            <section className='post-ans-container'>
                                <h3> Your Answer</h3>
                                <form >
                                    <textarea name="" id="" cols="30" rows="10"></textarea> <br />
                                    <input type="submit" className='post-ans-btn' value='Post your Answer' />
                                </form>
                                <p>
                                    Browse other Question tagged
                                    {
                                        question.questionTags.map((tag) => (
                                            <Link to='/Tags' key={tag} className='ans-tags' > {tag} </Link>
                                        ))
                                    } or 
                                    <Link to='/AskQuestion' style={{textDecoration:"none", color:"#009df"}}> Ask your own question</Link>
                                </p>

                            </section>
                            

                    </div>
                ))
            }
            </>
        }
        </div>
    </div>
  )
}

export default QuestionsDetails