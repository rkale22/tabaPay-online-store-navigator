# Project Overview

This project is an **Online Store Navigator**, a React application that features a dynamic tree menu, modal dialogs, a content display area, and organized data presentation using accordions.

## Technologies Used

- **React**: Chosen for its declarative, component-based architecture and efficient state management, making it ideal for building interactive UIs.
- **Material UI**: Selected for its extensive library of ready-to-use components and theming capabilities, which expedite development and ensure a cohesive design.
- **React Hooks (useState, useEffect)**: Utilized for managing component state and side effects, enabling a functional programming style.

## Design Decisions

### Why React over Vanilla JavaScript:
- **Simplified UI Development**: React's component model makes building complex UIs more manageable.
- **Enhanced Maintainability**: Code reusability and easier maintenance through component-based architecture.
- **Efficient Rendering**: Leveraging the virtual DOM for optimized rendering performance.

### Why Material UI over Tailwind CSS:
- **Comprehensive Component Library**: Material UI provides a wide range of pre-built components, reducing the need to create common UI elements from scratch.
- **Consistent Styling and Theming**: Offers robust theming capabilities to maintain a consistent design language across the application.
- **Rapid Implementation**: Facilitates quicker development of complex components like dialogs and accordions.

## Inspirations and References

- **Oracle Documentation on Tree Components**:
  - Provided insights into structuring hierarchical data and managing tree states.
  - Influenced the recursive rendering approach for the sidebar menu.
  
- **Material UI Documentation**:
  - Served as a primary resource for component usage and customization.
  - Ensured adherence to best practices in UI development.

## Development Approach

The application was developed incrementally, with each part building upon the previous one:

1. **Part 1**: Established the foundational dynamic tree menu with accordion behavior.
2. **Part 2**: Introduced interactivity by displaying selected items in a modal dialog.
3. **Part 3**: Enhanced user experience by adding a content area that reflects the selected category.
4. **Part 4**: Improved layout and branding with the addition of a header (with logo) and footer.
5. **Part 5**: Managed large data sets effectively by organizing content within accordions.

This approach ensured a structured development process, allowing for testing and refinement at each stage.

### Part 5: Organize Large Amounts of Data Using Accordions

**Proposed Solution**

**Immediate Implementation:**
- **Approach**: Enhanced the `Content` component to display data in a structured manner when a category is selected.
- **Visualization**: Utilized Material UI's `Accordion` components within the content area to organize and present large amounts of data for each category.
- **Advantages**:
  - **Intuitive**: Users can easily expand and collapse sections to view details as needed.
  - **Technically Sound**: Leveraged Material UI components effectively for a clean and responsive design.
  - **Time-Efficient**: Quick to implement, aligning with time constraints while meeting functionality requirements.

**Future Enhancement Proposal:**
To further enhance the application's usability and scalability, the following features can be implemented:

1. **Search Functionality:**
   - **Add a Search Bar**:
     - Place a search bar in the header or sidebar to allow users to quickly find specific categories or items.
   - **Search Logic**:
     - Implement a search algorithm to filter categories and content.
     - Provide real-time search results as the user types.
   - **Benefits**:
     - **User-Friendly**: Enhances data accessibility and improves user experience by allowing quick navigation.
     - **Scalable**: Efficiently handles large datasets, making the application more robust.

2. **Breadcrumb Navigation:**
   - **Purpose**:
     - Display the user's current location within the category hierarchy, improving navigation and context.
   - **Implementation**:
     - Show a breadcrumb trail above the content area.
     - Each breadcrumb is clickable, enabling users to navigate back to previous levels.
   - **Benefits**:
     - **Enhanced Navigation**: Provides clear context of the user's location within the application.
     - **Improved Usability**: Facilitates easier backtracking and exploration of categories.



## Getting Started

### Installation

1. **Clone the repository**:
   git clone https://github.com/rkale22/tabaPay-online-store-navigator.git

2. cd tabaPay-ui-assessment
3. npm install
4. npm start
The application will run on http://localhost:3000

### Usage

Navigate Categories: Use the sidebar to explore different categories. Clicking on a parent category will expand its subcategories while collapsing others.
View Content: Selecting a leaf category will display relevant content in the main area.
Modal Dialogs: Clicking on a leaf category will also trigger a modal dialog displaying the selected item's name.