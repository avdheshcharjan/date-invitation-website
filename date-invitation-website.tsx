import React, { useState } from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogAction } from '@/components/ui/alert-dialog';

const DateInvitation = () => {
  const [showNoOptions, setShowNoOptions] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const handleNoClick = () => {
    setShowNoOptions(true);
  };

  const handleYesClick = () => {
    setShowFinalMessage(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6 text-pink-600">
          Would you like to go on a date with me?
        </h1>
        
        {!showNoOptions && !showFinalMessage && (
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleYesClick}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              No
            </button>
          </div>
        )}

        {showNoOptions && !showFinalMessage && (
          <div className="mt-4">
            <p className="text-center mb-4 text-gray-700">Do you mean yes?</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleYesClick}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Yes
              </button>
              <button
                onClick={handleYesClick}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Definitely Yes
              </button>
            </div>
          </div>
        )}
      </div>

      <AlertDialog open={showFinalMessage} onOpenChange={setShowFinalMessage}>
        <AlertDialogContent>
          <AlertDialogDescription className="text-center text-lg font-semibold">
            Meet me at Marine Drive at 6 pm :)
          </AlertDialogDescription>
          <AlertDialogAction className="bg-pink-500 hover:bg-pink-600 text-white">
            Can't wait!
          </AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DateInvitation;
