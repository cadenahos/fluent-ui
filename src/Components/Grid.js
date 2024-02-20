import * as React from "react";
import { Dialog, DialogType, DialogFooter } from "@fluentui/react";
import {
  DetailsList,
  IconButton,
  Image,
  PrimaryButton,
  DefaultButton,
  ImageFit,
} from "@fluentui/react";

// Sample data
const initialItems = Array.from({ length: 50 }, (_, i) => ({
  key: (i + 1).toString(),
  accountNumber: (123456 + i).toString(),
  accountType: i % 2 === 0 ? "Checking" : "Savings",
  balance: 1000 * (i + 1),
  author: {
    name: `Author ${i + 1}`,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsnZD5qcEvUKP03lDIsUNwDicNqY2ciJAOqkGbLRGs3YnhTYkDvL0qumwh5ptuMEYt_5g&usqp=CAU",
  },
}));

const DataGrid = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 7;

  const [items, setItems] = React.useState(initialItems); // Add this line
  const [hideDialog, setHideDialog] = React.useState(true);

  const toggleHideDialog = () => {};
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleEdit = (item) => {
    setHideDialog(!hideDialog);
  };

  const handleDelete = (item) => {
    debugger;
    const updatedItems = items.filter((i) => i !== item);
    setItems(updatedItems);
  };
  const columns = [
    {
      key: "column1",
      name: "Account Number",
      fieldName: "accountNumber",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "column2",
      name: "Account Type",
      fieldName: "accountType",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "column3",
      name: "Balance",
      fieldName: "balance",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "column4",
      name: "Author",
      fieldName: "author",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        <>
          <Image
            src={item.author.imageUrl}
            width={50}
            height={50}
            imageFit={ImageFit.cover}
          />
          <span>{item.author.name}</span>
        </>
      ),
    },
    {
      key: "column5",
      name: "Actions",
      fieldName: "actions",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        <>
          <IconButton
            iconProps={{ iconName: "Edit" }}
            title="Edit"
            ariaLabel="Edit"
            onClick={() => handleEdit(item)}
          />
          <IconButton
            iconProps={{ iconName: "Delete" }}
            title="Delete"
            ariaLabel="Delete"
            onClick={() => handleDelete(item)}
          />
        </>
      ),
    },
    // Add more columns as needed
  ];
  return (
    <div>
      <DetailsList items={currentItems} columns={columns} setKey="set" />;
      <div>
        <PrimaryButton onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </PrimaryButton>
        <span>{`${currentPage} of ${totalPages}`}</span>
        <PrimaryButton
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </PrimaryButton>
      </div>
      <Dialog
        hidden={hideDialog}
        onDismiss={toggleHideDialog}
        dialogContentProps={{
          type: DialogType.normal,
          title: "Edit Dialog",
        }}
        modalProps={{
          isBlocking: false,
        }}
      >
        {/* Add your edit form here */}
        <DialogFooter>
          <PrimaryButton onClick={handleEdit} text="Save" />
          <DefaultButton onClick={handleEdit} text="Cancel" />
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export { DataGrid };
