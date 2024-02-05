# Liman Extension Development Utilities Frontend Kit

This kit is designed to streamline the process of developing extensions for your extensions. It provides a set of utilities and tools that simplify the tasks of creating and deploying frontend extensions.

## Features

- **Extension Generator**: A tool that automates the creation of basic extension structures, saving you time and ensuring consistency across your extensions.
- **Deployment Tools**: Simplify the process of deploying your extensions to your application.

## Getting Started

1. Clone the repository
2. Install the dependencies with `pnpm install`
3. Start developing your extension


### Modal Usage

```typescript
const openModal = () => {
  modal.open({
    title: "Test",
    formMode: true,
    formOptions: {
      options: {
        submitBtn: {
          text: "Gönder",
          show: true,
        },
        onSubmit: (data: any) => {
          console.log(data)
        },
      },
      rule: [
        {
          type: "input",
          field: "goods_name",
          title: "Name",
          validate: [
            {
              required: true,
              trigger: "blur",
              message: "Name cannot be empty",
            },
          ],
        },
        {
          type: "checkbox",
          field: "label",
          title: "Select",
          options: [
            { label: "a", value: 0 },
            { label: "b", value: 1 },
            { label: "c", value: 2 },
            { label: "d", value: 3 },
          ],
        },
      ],
    },
  })
}
```