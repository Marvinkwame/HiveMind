import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Doc } from "@/convex/_generated/dataModel";
import { Button } from "./ui/button";

type DocumentCardProps = {
    document: Doc<"documents">
 }

const DocumentCard = ({ document  } : DocumentCardProps ) => {
  return (
    <Card key={document._id}>
      <CardHeader>
        <CardTitle>{document.title}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button>View Document</Button>
      </CardFooter>
    </Card>
  );
};

export default DocumentCard;
