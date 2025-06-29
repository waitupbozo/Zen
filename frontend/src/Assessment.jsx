
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { FaArrowLeft } from 'react-icons/fa';

// const questions = [
//   "Little interest or pleasure in doing things?",
//   "Feeling down, depressed, or hopeless?",
//   "Trouble falling/staying asleep, or sleeping too much?",
//   "Feeling tired or having little energy?",
//   "Poor appetite or overeating?",
//   "Feeling bad about yourself—or that you are a failure or have let yourself or your family down?",
//   "Trouble concentrating on things, such as reading the newspaper or watching television?",
//   "Moving or speaking so slowly that other people could have noticed? Or being so fidgety or restless that you have been moving around a lot more than usual?",
//   "Thoughts that you would be better off dead or of hurting yourself in some way?",
// ];

// const Assessment = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState(Array(questions.length).fill(0));
//   const [showResults, setShowResults] = useState(false);
//   const [resultData, setResultData] = useState(null);

//   // Save the assessment results to the backend
//   const saveAssessment = async (totalScore, result) => {
//     try {
//       const response = await fetch('http://localhost:5000/save-assessment', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         credentials: 'include', // to include session cookies
//         body: JSON.stringify({
//           score: totalScore,
//           result: result,
//           responses: answers, // include the answers if needed
//         }),
//       });
//       if (!response.ok) throw new Error('Failed to save assessment');
//     } catch (error) {
//       console.error('Error saving assessment:', error);
//     }
//   };

//   // Calculate assessment results based on the total score
//   const calculateResults = (totalScore) => {
//     let result;
//     if (totalScore >= 20) result = { message: "Severe depression", color: "bg-red-500" };
//     else if (totalScore >= 15) result = { message: "Moderately severe depression", color: "bg-orange-500" };
//     else if (totalScore >= 10) result = { message: "Moderate depression", color: "bg-yellow-500" };
//     else if (totalScore >= 5) result = { message: "Mild depression", color: "bg-indigo-500" };
//     else result = { message: "Minimal or no depression", color: "bg-emerald-500" };

//     return { ...result, score: totalScore };
//   };

//   const handleFinish = () => {
//     const totalScore = answers.reduce((sum, val) => sum + val, 0);
//     const result = calculateResults(totalScore);
//     saveAssessment(totalScore, result);
//     setResultData(result);
//     setShowResults(true);
//   };

//   return (
//     <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
//       <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         {/* Back Link */}
//         <Link to="/dashboard" className="flex items-center text-emerald-400 hover:underline mb-6">
//           <FaArrowLeft className="mr-2" /> Back to Dashboard
//         </Link>

//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }} 
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
//             Mental Health Assessment (PHQ-9)
//           </h2>
//         </motion.div>

//         {/* Assessment Card */}
//         <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700/30 shadow-2xl backdrop-blur-sm">
//           {!showResults ? (
//             <>
//               {/* Progress Bar */}
//               <div className="relative h-2 bg-slate-700 rounded-full mb-8">
//                 <div
//                   className="h-full bg-emerald-400 rounded-full transition-all"
//                   style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
//                 />
//               </div>

//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentQuestion}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -50 }}
//                   className="w-full"
//                 >
//                   <p className="text-slate-400 mb-2">
//                     Question {currentQuestion + 1} of {questions.length}:
//                   </p>
//                   <h3 className="text-xl font-medium text-white mb-6">
//                     {questions[currentQuestion]}
//                   </h3>

//                   {/* Answer Options */}
//                   <div className="space-y-4 mb-8">
//                     {["Not at all", "Several days", "More than half the days", "Nearly every day"].map((label, idx) => (
//                       <div key={idx} className="flex items-center">
//                         <input
//                           type="radio"
//                           name={`question-${currentQuestion}`}
//                           value={idx}
//                           checked={answers[currentQuestion] === idx}
//                           onChange={() => {
//                             const newAnswers = [...answers];
//                             newAnswers[currentQuestion] = idx;
//                             setAnswers(newAnswers);
//                           }}
//                           className="mr-3 accent-emerald-400"
//                         />
//                         <label className="text-slate-300">{label}</label>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Navigation Buttons */}
//                   <div className="flex justify-between">
//                     <button
//                       onClick={() => setCurrentQuestion(p => Math.max(0, p - 1))}
//                       disabled={currentQuestion === 0}
//                       className={`px-6 py-2 rounded-lg ${currentQuestion === 0 ? 'bg-slate-600 text-slate-400' : 'bg-emerald-400 text-slate-900'} transition-colors`}
//                     >
//                       Previous
//                     </button>
//                     <button
//                       onClick={() => currentQuestion < questions.length - 1 ? setCurrentQuestion(p => p + 1) : handleFinish()}
//                       className="px-6 py-2 bg-emerald-400 text-slate-900 rounded-lg hover:bg-emerald-500 transition-colors"
//                     >
//                       {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
//                     </button>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </>
//           ) : (
//             // Results Section
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center p-8">
//               <h3 className="text-2xl font-semibold mb-4 text-white">Assessment Results</h3>
//               <div className={`${resultData.color} p-4 rounded-lg mb-6`}>
//                 <p className="text-lg">{resultData.message}</p>
//                 <p className="text-sm mt-2">Score: {resultData.score}</p>
//               </div>
//               <button
//                 onClick={() => {
//                   setShowResults(false);
//                   setCurrentQuestion(0);
//                   setAnswers(Array(questions.length).fill(0));
//                 }}
//                 className="px-6 py-2 bg-slate-700 text-emerald-400 rounded-lg hover:bg-slate-600 transition-colors"
//               >
//                 Retake Assessment
//               </button>
//             </motion.div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Assessment;
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const questions = [
  "Little interest or pleasure in doing things?",
  "Feeling down, depressed, or hopeless?",
  "Trouble falling/staying asleep, or sleeping too much?",
  "Feeling tired or having little energy?",
  "Poor appetite or overeating?",
  "Feeling bad about yourself—or that you are a failure or have let yourself or your family down?",
  "Trouble concentrating on things, such as reading the newspaper or watching television?",
  "Moving or speaking so slowly that other people could have noticed? Or being so fidgety or restless that you have been moving around a lot more than usual?",
  "Thoughts that you would be better off dead or of hurting yourself in some way?",
];

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(0));
  const [showResults, setShowResults] = useState(false);
  const [resultData, setResultData] = useState(null);

  // Save the assessment results to the backend
  const saveAssessment = async (totalScore, result) => {
    try {
      const response = await fetch('https://zenback-3.onrender.com/save-assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // to include session cookies
        body: JSON.stringify({
          score: totalScore,
          result: result,
          responses: answers,
        }),
      });
      if (!response.ok) throw new Error('Failed to save assessment');
    } catch (error) {
      console.error('Error saving assessment:', error);
    }
  };

  // Calculate assessment results based on the total score
  const calculateResults = (totalScore) => {
    let result;
    if (totalScore >= 20) result = { message: "Severe depression", color: "bg-red-500" };
    else if (totalScore >= 15) result = { message: "Moderately severe depression", color: "bg-orange-500" };
    else if (totalScore >= 10) result = { message: "Moderate depression", color: "bg-yellow-500" };
    else if (totalScore >= 5) result = { message: "Mild depression", color: "bg-indigo-500" };
    else result = { message: "Minimal or no depression", color: "bg-emerald-500" };

    return { ...result, score: totalScore };
  };

  const handleFinish = () => {
    const totalScore = answers.reduce((sum, val) => sum + val, 0);
    const result = calculateResults(totalScore);
    saveAssessment(totalScore, result);
    setResultData(result);
    setShowResults(true);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link to="/dashboard" className="flex items-center text-emerald-400 hover:underline mb-6">
          <FaArrowLeft className="mr-2" /> Back to Dashboard
        </Link>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Mental Health Assessment (PHQ-9)
          </h2>
        </motion.div>

        {/* Assessment Card */}
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
          {!showResults ? (
            <>
              {/* Progress Bar */}
              <div className="relative h-2 bg-gray-700 rounded-full mb-8">
                <div
                  className="h-full bg-emerald-400 rounded-full transition-all"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="w-full"
                >
                  <p className="text-gray-400 mb-2">
                    Question {currentQuestion + 1} of {questions.length}:
                  </p>
                  <h3 className="text-xl font-medium text-white mb-6">
                    {questions[currentQuestion]}
                  </h3>

                  {/* Answer Options */}
                  <div className="space-y-4 mb-8">
                    {["Not at all", "Several days", "More than half the days", "Nearly every day"].map((label, idx) => (
                      <div key={idx} className="flex items-center">
                        <input
                          type="radio"
                          name={`question-${currentQuestion}`}
                          value={idx}
                          checked={answers[currentQuestion] === idx}
                          onChange={() => {
                            const newAnswers = [...answers];
                            newAnswers[currentQuestion] = idx;
                            setAnswers(newAnswers);
                          }}
                          className="mr-3 accent-emerald-400"
                        />
                        <label className="text-gray-300">{label}</label>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between">
                    <button
                      onClick={() => setCurrentQuestion(p => Math.max(0, p - 1))}
                      disabled={currentQuestion === 0}
                      className={`px-6 py-2 rounded-lg ${currentQuestion === 0 ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-emerald-400 text-gray-900'} transition-colors`}
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => currentQuestion < questions.length - 1 ? setCurrentQuestion(p => p + 1) : handleFinish()}
                      className="px-6 py-2 bg-emerald-400 text-gray-900 rounded-lg hover:bg-emerald-500 transition-colors"
                    >
                      {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            // Results Section
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center p-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">Assessment Results</h3>
              <div className={`${resultData.color} p-4 rounded-lg mb-6`}>
                <p className="text-lg">{resultData.message}</p>
                <p className="text-sm mt-2">Score: {resultData.score}</p>
              </div>
              <button
                onClick={() => {
                  setShowResults(false);
                  setCurrentQuestion(0);
                  setAnswers(Array(questions.length).fill(0));
                }}
                className="px-6 py-2 bg-gray-700 text-emerald-400 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Retake Assessment
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assessment;
