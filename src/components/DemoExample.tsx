
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "~/core/ui/Table"

import Image from 'next/image';

interface CheckIconProps {
  className?: string;
  style?: React.CSSProperties;
}

interface XIconProps {
  className?: string;
  style?: React.CSSProperties;
}

interface CheckIconProps2 {
  className?: string;
  style?: React.CSSProperties;
}

interface XIconProps2 {
  className?: string;
  style?: React.CSSProperties;
}

const CheckIcon: React.FC<CheckIconProps> = (props) => {
  return (

<svg    {...props} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 4.009c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm2.449 7.882 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z" fillRule="nonzero"/></svg>
  );
};

const XIcon: React.FC<XIconProps> = (props) => {
  return (
    <svg  {...props}  clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 3.998c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm7.491 6.432 2.717-2.718c.146-.146.338-.219.53-.219.404 0 .751.325.751.75 0 .193-.073.384-.22.531l-2.717 2.717 2.728 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-2.728-2.728-2.728 2.728c-.147.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .384.073.53.219z" fillRule="nonzero"/></svg>
  );
};



const CheckIcon2: React.FC<CheckIconProps> = (props) => {
  return (

<svg    {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>


  );
};

const XIcon2: React.FC<XIconProps> = (props) => {
  return (
    <svg
      {...props}
 clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
  );
};







export default function DemoExample() {
  return (
    <div className="w-full overflow-auto border sm:rounded-lg" style={{width: "80%", marginLeft: "auto", marginRight: "auto"}}>
      <Table>
        <TableHeader>
          <TableRow>
          <TableHead className="w-1/3 sm:w-1/4">Feature</TableHead>
          <TableHead className="w-1/4">
            <Image src="/assets/images/our_logo.png" alt="Our Software" width={50} height={50} />
          </TableHead>
          <TableHead className="w-1/4">
            <Image src="https://i.imgur.com/Wuf80Dd.png" alt="Wheelbase" width={50} height={50} />
          </TableHead>
          <TableHead className="w-1/4">
            <Image src="https://i.imgur.com/Wdhv7OB.png" alt="RV-Share" width={50} height={50} />
          </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Price</TableCell>
            <TableCell>$199</TableCell>
            <TableCell>$249</TableCell>
            <TableCell>$179</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Feature #2</TableCell>
            <TableCell>
              <CheckIcon className="h-8 w-8 fill-primary" />
            </TableCell>
            <TableCell>
              <XIcon className="h-8 w-8 stroke-muted-foreground" />
            </TableCell>
            <TableCell>
              <CheckIcon className="h-8 w-8 fill-primary" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>  Feature #3</TableCell>
            <TableCell>  <CheckIcon2 className="h-8 w-8 fill-primary" /></TableCell>
            <TableCell>   <XIcon2 className="h-8 w-8 stroke-muted-foreground" /></TableCell>
            <TableCell>   <XIcon2 className="h-8 w-8 stroke-muted-foreground" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Feature #4</TableCell>
            <TableCell>  <CheckIcon2 className="h-8 w-8 fill-primary" /></TableCell>
            <TableCell>  <CheckIcon2 className="h-8 w-8 fill-primary" /></TableCell>
            <TableCell>   <XIcon2 className="h-8 w-8 stroke-muted-foreground" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Feature #5</TableCell>
            <TableCell>  <CheckIcon2 className="h-8 w-8 fill-primary" /></TableCell>
            <TableCell>   <XIcon2 className="h-8 w-8 stroke-muted-foreground" /></TableCell>
            <TableCell>   <XIcon2 className="h-8 w-8 stroke-muted-foreground" /></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
