import Layout from "@/components/Layout/Layout";
import React, { useState } from "react";
import { TiPlus, TiTimes } from "react-icons/ti";

interface Question {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

const tags = ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"];

const EvaluationForm: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newQuestion, setNewQuestion] = useState<Question>({
    id: "",
    title: "",
    description: "",
    tags: [],
  });
  const [selectedTag, setSelectedTag] = useState("");

  const handleAddQuestion = () => {
    const questionId = `question-${questions.length + 1}`;
    const updatedQuestions = [...questions, { ...newQuestion, id: questionId }];
    setQuestions(updatedQuestions);
    setNewQuestion({ id: "", title: "", description: "", tags: [] });
  };

  const handleRemoveQuestion = (questionId: string) => {
    const updatedQuestions = questions.filter(
      (question) => question.id !== questionId
    );
    setQuestions(updatedQuestions);
  };

  const handleTagSelect = () => {
    if (selectedTag && !newQuestion.tags.includes(selectedTag)) {
      setNewQuestion((prevQuestion) => ({
        ...prevQuestion,
        tags: [...prevQuestion.tags, selectedTag],
      }));
      setSelectedTag("");
    }
  };

  const handleTagRemove = (tag: string) => {
    const updatedTags = newQuestion.tags.filter((t) => t !== tag);
    setNewQuestion((prevQuestion) => ({
      ...prevQuestion,
      tags: updatedTags,
    }));
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setNewQuestion((prevQuestion) => ({
      ...prevQuestion,
      [name]: value,
    }));
  };

  const handleFinish = () => {
    // Compose all questions as one form
    const formData = new FormData();
    questions.forEach((question) => {
      formData.append("titles[]", question.title);
      formData.append("descriptions[]", question.description);
      question.tags.forEach((tag) => {
        formData.append("tags[]", tag);
      });
    });

    // TODO: Send formData to the backend or perform any desired action

    // Reset the form
    setQuestions([]);
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <Layout page="hrexpert">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Evaluation Form</h1>
          <span className="flex justifiy">
            <div className="mb-4 inline-block w-[50%]">
              <label htmlFor="title" className="font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={newQuestion.title}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="mb-4 ml-[20%]">
              <label htmlFor="tags" className="font-bold mb-2 block">
                Tags
              </label>
              <div className="flex">
                <select
                  id="tags"
                  name="tags"
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="border border-gray-300 p-2 rounded-md w-40"
                >
                  <option value="">Select Tag</option>
                  {tags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleTagSelect}
                  disabled={!selectedTag}
                  className="bg-primary text-white py-2 px-4 ml-2 rounded-lg"
                >
                  Add Tag
                </button>
              </div>
            </div>
          </span>
          <div className="mb-4">
            <label htmlFor="description" className="font-bold mb-2 block">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={newQuestion.description}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full"
              rows={4}
            />
          </div>
          <button
            onClick={handleAddQuestion}
            className="bg-primary text-white py-2 px-4 rounded-lg flex items-center"
          >
            <TiPlus className="h-5 w-5 mr-1" />
            Add Question
          </button>
          <div className="mt-4">
            {questions.map((question) => (
              <div
                key={question.id}
                className="border border-gray-300 p-4 mb-4 flex justify-between items-center"
              >
                <div>
                  <h2 className="font-bold text-lg mb-2">{question.title}</h2>
                  <p>{question.description}</p>
                  <div className="flex mt-2">
                    {question.tags.map((tag) => (
                      <div
                        key={tag}
                        className="bg-gray-200 px-2 py-1 rounded-full text-sm mr-2"
                      >
                        {tag}
                        <button
                          onClick={() => handleTagRemove(tag)}
                          className="text-red-500 hover:text-red-700 ml-1"
                        >
                          <TiTimes className="h-4 w-4 inline-block align-middle" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveQuestion(question.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <TiTimes className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={handleFinish}
            className="bg-red-600 text-white py-2 px-4 rounded-lg mt-4"
          >
            Finish
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default EvaluationForm;
