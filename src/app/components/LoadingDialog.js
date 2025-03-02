import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import QuestionLoader from "./Loader";
function LoadingDialog({ loading }) {
  return (
    <div>
      <AlertDialog open={loading}>
        <AlertDialogContent>
          <QuestionLoader />
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default LoadingDialog;
