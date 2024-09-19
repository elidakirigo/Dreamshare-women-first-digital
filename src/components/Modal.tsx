import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PartnersAvatars from "./PartnersAvatars";
import { Button } from "./ui/button";
import { UseProfile } from "@/Hooks/UseProfile";

type ProfileProps = {
  name: { first: string; last: string };
  location: { country: string };
  id: { value: number };
};

const Modal = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { results } = UseProfile();

  return (
    <Dialog >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>More Partner Suggestions</DialogTitle>
        </DialogHeader>
        <div className="max-h-40  md:max-h-72 grid grid-cols-1 overflow-y-auto overflow-x-hidden md:grid-cols-2 gap-8 ">
          {new Array(15)
            .fill([])
            .map(() =>
              results.map(({ name, location, id }: ProfileProps) => (
                <PartnersAvatars
                  key={id.value}
                  name={`${name.first} ${name.last} `}
                  location={location.country}
                  background="#FF4E50"
                />
              )),
            )}
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
