window.angular.module('UIApp')
.config(['$translateProvider', function( $translateProvider ) {

  $translateProvider.translations('en', {
    GREETING: 'Hello World!',
    LANGUAGE: 'Language',
    ENGLISH: 'English',
    SPANISH: 'Spanish',
    BUILD_SETUP: 'BUILD YOUR PRODUCT SETUP',
    GERMAN: 'German',
    OLD_PASSWORD: 'Current Password',
    PASSWORD: 'New Password',
    CONFIRM_PASSWORD: 'Confirm new Password',
    ITALIAN: 'Italian',
    FRENCH: 'French',
    INCREASE: 'Increase',
    DECREASE: 'Decrease',
    PREVIOUS: 'Previous',
    FINISH: 'Finish',
    NEXT: 'Next',
    WIZARD_GUIDE: 'This wizard will take you throught product configuration.',
    FROM: 'From',
    TO: 'To',
    EDIT: 'Edit',
    DELETE: 'Delete',
    CLEAN: 'Clean',
    ITEM_TO_ISSUE: 'Items to issue',
    SEARCH: 'Search',
    SELECT_CSV: 'Select CSV file',
    // LOCATION: 'Location',
    // POSITION: 'Position',
    PRODUCT: 'Product/SKU',
    PRODUCT_SETUP: 'Product Setup',
    PRODUCT_WIZARD: 'Product Wizard',
    ITEMS: 'Products',
    ITEM: 'Product',
    INVENTORY_MANAGEMENT: 'Inventory Management',
    MANUAL: 'Manual',
    HELP: 'Help',
    ABOUT: 'About',
    QUANTITY: 'Quantity',
    STATUS: {
      ACTIVE: 'Active',
      INACTIVE: 'Inactive',
      DISABLED: 'Disabled',
      PENDING: 'Pending'
    },
    ACTIONS: {
      NEW: 'New',
      SEND: 'Send',
      REMOVE: 'Remove',
      CANCEL: 'Cancel',
      UPDATE: 'Update',
      SEARCH: 'Search',
      SERIALIZE: 'Create Serialized Unit'
    },
    PRODUCTS: {
      NEW_PRODUCT: 'New Product',
      PROPERTIES: 'Properties',
      NEW: 'New',
      PRODUCT: 'Product',
      CANCEL: 'Cancel',
      SEND: 'Send',
      DESTROY: 'Destroy',
      UPDATE: 'Update',
      EDIT_PROD: 'Editing product',
      QRCODE: 'QR Code',
      BARCODE: 'Barcode',
      SKU: 'SKU',
      SHORT_DESC: 'Short description',
      LONG_DESC: 'Long description',
      ALT_DESC: 'Alternative description',
      FACT_NUM: 'Factory number',
      CUST_NUM: 'Customer client',
      ALT_NUM: 'Alternative number',
      SEC_ALT_NUM: 'Secondary alternative number',
      MANUFACTURE: 'Manufacture',
      CROSS_NUM: 'Cross number',
      SUPPLIER: 'Supplier',
      SUPP_NUM: 'Supplier number',
      PRICE: 'Price',
      CATEGORY: 'Category',
      COLOR: 'Color',
      SERIAL: 'Serial',
      COMP_SIZE: 'Compartment size',
      DIMENSIONS: 'Dimensions',
      STATUS: 'Status',
      EMPTY: 'There is not products',
      HELP_SHORT_DESC: 'Short description for this product',
      HELP_LONG_DESC: 'Long description for this product',
      HELP_ALT_DESC: 'Alternative description for this product',
      TO_RESTOCK: 'Positions to restock',
      SKU_EMPTY: 'Sku can\'t be blank',
      BARCODE_EMPTY: 'Barcode can\'t be blank',
      SHORT_DESC_EMPTY: 'Product short description can\'t be blank',
      DELETE_FAIL: 'Product can not be deleted'
    },
    INVENTORY: {
      ISSUE: 'Issue',
      RESTOCK: 'Restock',
      RECLAIM: 'Reclaim',
      ASSIGN: 'Assign',
      MOVE: {
        MOVE: 'Move',
        CAN_NOT_EMPTY_POS: "You can't choose an empty position!",
        CAN_EMPTY_POS: "You should choose an empty position!"
      },
      TRANSFER: 'Transfer',
      ENTER_PRODUCT: 'Enter Product SKU',
      FINISH_TRANSACTION: 'Finish Transaction',
      REMOVE: 'Remove',
      DEST_SITE: 'Destination site'
    },
    ASSETS: {
      TITLE: 'Assets',
      EMPTY: 'There is not assets',
      NEW_ASSET: 'New asset',
      EDIT_ASSET: 'Editing asset',
      PRODUCT: 'Product',
      CHECK_IN: 'Check in',
      CHECK_OUT: 'Check out',
      LOAN_TIME: 'Loan time (min)',
      LOAN_TIME_H: 'Loan time (hrs)',
      RECHARGEAGLE: 'Rechargeagle',
      RECHARGEAGLE_TIME: 'Rechargeagle time (min)',
      CALIBRATION: 'Calibration',
      CALIBRATION_TIME: 'Calibration time period (min)',
      LOCKED_DOWN: 'Locked down',
      REASON: 'Reason',
      STATUS: 'Status',
      ITEM_EMPTY: 'Product can\'t be blank',
      CALIBRATION_TIME_EMPTY: 'Calibration time can\'t be blank',
      RECHARGEABLE_TIME_EMPTY: 'Rechargeable time period can\'t be blank'
    },
    COMPANY: {
      MENU: 'Company',
      COMPANY: 'Company Management',
      ADD: 'Add Company',
      DELETE: 'Delete company',
      SAVE: 'Save',
      COMPANY_NAME: 'Company Name',
      LOGO: 'Logo',
      MESSAGE: 'Message',
      DEFAULT_LANG: 'Default Lang',
      ADDRESS: 'Address',
      COMPANY_TYPE: 'Company Type',
      PHONE: 'Phone',
      LOGGING: 'Logging',
      EMAIL: 'Admin email',
      SEARCH: 'Search company by name',
      EDIT: 'Edit company',
      CANCEL: 'Cancel',
      NAME_EMPTY: 'Company name can\'t be blank',
      DEFAULT_LANG_EMPTY: 'Company default language should be selected',
      TYPE_EMPTY: 'Compnay type should be selected'
    },
    SITE: {
      MENU: 'Site',
      SITE: 'Site Management',
      ADD: 'Add',
      EDIT: 'Edit',
      CANCEL: 'Cancel',
      DELETE: 'Delete',
      NEW: 'New Site',
      SAVE: 'Save',
      NAME: 'Name',
      ADDRESS: 'Address',
      SEARCH: 'search site by name',
      NAME_EMPTY: 'Site name can\'t be blank',
      ADDRESS_EMPTY: 'Site address can\'t be blank'
    },
    LOCATION: {
      MENU: 'Location',
      LOCATION_MANAGEMENT: 'Location Management',
      LOCATION: 'Location',
      ADD: 'Add',
      EDIT: 'Edit',
      CANCEL: 'Cancel',
      DELETE: 'Delete',
      NEW: 'New Location',
      SAVE: 'Save',
      SITE: 'Site',
      NAME: 'Name',
      NAME_EMPTY: 'Location name can\'t be blank',
      SITE_NAME_EMPTY: 'Site should be selected',
      SEARCH: 'search Location by name'
    },
    POSITION: {
      MENU: 'Position',
      POSITION: 'Position',
      POSITION_MANAGEMENT: 'Position Management',
      ADD: 'Add',
      EDIT: 'Edit',
      CANCEL: 'Cancel',
      DELETE: 'Delete',
      NEW: 'New Position',
      SAVE: 'Save',
      SITE: 'Site',
      LOCATION: 'Location',
      NAME: 'Name',
      SHELF: 'Shelf',
      BIN: 'Bin',
      CUR_QTY: 'Current Quantity',
      MIN_QTY: 'Minima Quantity',
      MAX_QTY: 'Maxima Quantity',
      CRITICAL_QTY: 'Critical Quantity',
      NAME_EMPTY:'Position name can\'t be blank',
      SITE_EMPTY: 'Site should be selected',
      LOCATION_EMPTY: 'Location should be selected',
      ITEM_EMPTY: 'Item should be selected',
      SHELF_EMPTY: 'Shelf can\'t be blank',
      BIN_EMPTY: 'Bin can\'t be blank',
      MIN_QTY_EMPTY: 'Min quantity can\'t be blank',
      MAX_QTY_EMPTY: 'Max quantity can\'t be blank',
      MAX_GREATER: 'Max quantity should be greater than Min quantity',
      CRITICAL_QTY_EMPTY: 'Critical quantity can\'t be blank',
      CRITICAL_QTY_LESS: 'Critical quantity should be less or equal than Min quantity',
      ITEM: 'Product',
      SEARCH: 'search Position by name'
    },
    STORAGE_HIERARCHY: {
      MENU: 'Storage',
      SUB_MENU: 'Storage Hierarchy',
      STORAGE_HIERARCHY: 'Storage Hierarchy'
    },
    USER: {
      USERS: 'Users',
      USER: 'User Register',
      SAVE: 'Save',
      NAME: 'Name',
      LAST_NAME: 'Last name',
      PHONE: 'Phone',
      CELL_PHONE: 'Cell phone',
      EMAIL: 'Email',
      PASSWORD: 'Password',
      LANGUAGE: 'Language',
      EDIT: 'Edit user',
      CANCEL: 'Cancel',
      ROLE: 'Role',
      DELETE: 'Delete user',
      NEW: 'New user',
      LIST: 'List',
      EDITION: 'Edition',
      SEARCH: 'Search user by name',
      WELCOME: 'Welcome',
      SETTINGS: 'Settings',
      CONTACT_SUPPORT: 'Contact Support',
      LOG_OUT: 'Log out',
      SIGN_IN: 'Sign in',
      SIGN_UP: 'Sign up',
      USERROLE: 'User',
      ADMINROLE: 'Administrator',
      ENABLE: 'Enable user',
      NAME_EMPTY: 'User name can\'t be blank',
      EMAIL_EMPTY: 'User email can\'t be blank',
      LANGUAGE_EMPTY: 'User language should be selected',
      PASSWORD_EMPTY: 'Password can\'t be blank',
      PASSWORD_SHORT: 'Password is too short, it should contains at least eigth characters',
      CHECKBOX_ROLE: 'Is Admin?'
    },
    REPORT: {
      GENERAL_REPORTING: 'General Report',
      RESTOCK_MANAGEMENT: {
        TITLE: 'Restock Report',
        NEEDED_QTY: 'Min Needed Quantity'
      },
      TITLE: 'Reports',
      ISSUE: {
        NUMBER: 'Issue',
        TITLE: 'Issue Log',
        USER_EMAIL: 'User',
        USER_NAME: 'Name',
        ITEM: 'Item Taken',
        ITEM_SKU: 'SKU Number',
        QUANTITY: 'Quantity',
        SITE: 'Issue Site',
        LOCATION: 'Issue Location',
        POSITION: 'Shelf/Bin',
        DATE: 'Issue Date',
        FROM: 'Issues From',
        TO: 'Issues To',
        FIND: 'Search Issues'
      },
      CHECKBOOK: {
        TITLE: 'Checkbook',
        EVENT_TYPE: 'Event Type',
        EVENT_DATE: 'Event Date'
      },
      LACK: {
        TITLE: 'Lack of Usage',
        HIDE: 'Hide details',
        SHOW: 'Show details',
        ID: 'Id',
        NAME: 'Name',
        NO_ITEMS: 'There is no products'
      },
      STATS_FOR_VELOCITY: {
        TITLE: 'Velocity Statistics',
        SKU_NUMBER: 'Sku Number',
        RATE: 'Velocity Rate (Unities/Day)',
        FROM: 'From',
        TO: 'To',
        LOCATION: 'Location'
      }
    },
    DASHBOARD:{
      SHOW_DETAILS: 'Show more details',
      VELOCITY: {
        TITLE: 'It is the best average this month'
      },
      RATE: '{{value}}/day'
    },
    NO_RESULTS: 'Not Results Found',
    BACK: 'Back to Dashboard'
  });
}]);

// {
//       "GREETING": "Hello World!",
//       "LANGUAGE": "Language",
//       "ENGLISH": "English",
//       "SPANISH": "Spanish",
//       "GERMAN": "German",
//       "INCREASE": "Increase",
//       "DECREASE": "Decrease",
//       "ITEM_TO_ISSUE": "Items to issue",
//       "SEARCH": "Search",
//       "PRODUCT": "Product/SKU",
//       "ITEMS": "Products",
//       "ITEM": "Product",
//       "INVENTORY_MANAGEMENT": "Inventory Management",
//       "MANUAL": "Manual",
//       "HELP": "Help",
//       "ABOUT": "About",
//       "QUANTITY": "Quantity",
//       "STATUS": {
//         "ACTIVE": "Active",
//         "INACTIVE": "Inactive",
//         "DISABLED": "Disabled",
//         "PENDING": "Pending"
//       },
//       "ACTIONS": {
//         "NEW": "New",
//         "SEND": "Send",
//         "REMOVE": "Remove",
//         "CANCEL": "Cancel",
//         "UPDATE": "Update",
//         "SEARCH": "Search",
//         "SERIALIZE": "Create Serialized Unit"
//       },
//       "PRODUCTS": {
//         "NEW_PRODUCT": "New Product",
//         "PROPERTIES": "Propiedades",
//         "NEW": "New",
//         "PRODUCT": "Product",
//         "CANCEL": "Cancel",
//         "SEND": "Send",
//         "DESTROY": "Destroy",
//         "UPDATE": "Update",
//         "EDIT_PROD": "Editing product",
//         "SKU": "SKU",
//         "SHORT_DESC": "Short description",
//         "LONG_DESC": "Long description",
//         "ALT_DESC": "Alternative description",
//         "FACT_NUM": "Factory number",
//         "CUST_NUM": "Customer client",
//         "ALT_NUM": "Alternative number",
//         "SEC_ALT_NUM": "Secondary alternative number",
//         "MANUFACTURE": "Manufacture",
//         "CROSS_NUM": "Cross number",
//         "SUPPLIER": "Supplier",
//         "SUPP_NUM": "Supplier number",
//         "PRICE": "Price",
//         "CATEGORY": "Category",
//         "COLOR": "Color",
//         "SERIAL": "Serial",
//         "COMP_SIZE": "Compartment size",
//         "DIMENSIONS": "Dimensions",
//         "STATUS": "Status",
//         "EMPTY": "There is not products",
//         "HELP_SHORT_DESC": "Short description for this product",
//         "HELP_LONG_DESC": "Long description for this product",
//         "HELP_ALT_DESC": "Alternative description for this product"
//       },
//       "INVENTORY": {
//         "ISSUE": "Issue",
//         "RESTOCK": "Restock",
//         "RECLAIM": "Reclaim",
//         "ASSIGN": "Assign",
//         "ENTER_PRODUCT": "Enter Product SKU",
//         "FINISH_TRANSACTION": "Finish Transaction",
//         "REMOVE": "Remove"
//       },
//       "ASSETS": {
//         "TITLE": "Assets",
//         "EMPTY": "There is not assets",
//         "NEW_ASSET": "New asset",
//         "EDIT_ASSET": "Editing asset",
//         "PRODUCT": "Product",
//         "CHECK_IN": "Check in",
//         "CHECK_OUT": "Check out",
//         "LOAN_TIME": "Loan time",
//         "RECHARGEAGLE": "Rechargeagle",
//         "RECHARGEAGLE_TIME": "Rechargeagle time",
//         "CALIBRATION": "Calibration",
//         "CALIBRATION_TIME": "Calibration time period",
//         "LOCKED_DOWN": "Locked down",
//         "REASON": "Reason",
//         "STATUS": "Status"
//       },
//       "COMPANY": {
//         "MENU": "Company",
//         "COMPANY": "Company Management",
//         "ADD": "Add",
//         "DELETE": "Delete",
//         "SAVE": "Save",
//         "NAME": "Name",
//         "LOGO": "Logo",
//         "MESSAGE": "Message",
//         "DEFAULT_LANG": "Default Lang",
//         "ADDRESS": "Address",
//         "COMPANY_TYPE": "Company Type",
//         "PHONE": "Phone",
//         "LOGGING": "Logging"
//       },
//       "SITE": {
//         "MENU": "Site",
//         "SITE": "Site Management",
//         "ADD": "Add",
//         "DELETE": "Delete",
//         "SAVE": "Save",
//         "NAME": "Name",
//         "ADDRESS": "Address"
//       },
//       "LOCATION": {
//         "MENU": "Location",
//         "LOCATION_MANAGEMENT": "Location Management",
//         "LOCATION": "Location",
//         "ADD": "Add",
//         "DELETE": "Delete",
//         "SAVE": "Save",
//         "SITE": "Site",
//         "NAME": "Name"
//       },
//       "POSITION": {
//         "MENU": "Position",
//         "POSITION": "Position",
//         "POSITION_MANAGEMENT": "Position Management",
//         "ADD": "Add",
//         "DELETE": "Delete",
//         "SAVE": "Save",
//         "SITE": "Site",
//         "LOCATION": "Location",
//         "NAME": "Name",
//         "SHELF": "Shelf",
//         "BIN": "Bin",
//         "CUR_QTY": "Current Quantity"
//       },
//       "STORAGE_HIERARCHY": {
//         "MENU": "Storage",
//         "SUB_MENU": "Storage Hierarchy",
//         "STORAGE_HIERARCHY": "Storage Hierarchy"
//       },
//       "USER": {
//         "USERS": "Users",
//         "USER": "User Register",
//         "SAVE": "Save",
//         "NAME": "Name",
//         "LAST_NAME": "Last name",
//         "PHONE": "Phone",
//         "CELL_PHONE": "Cell phone",
//         "EMAIL": "Email",
//         "PASSWORD": "Password",
//         "LANGUAGE": "Language",
//         "EDIT": "Edit",
//         "DELETE": "Delete",
//         "NEW": "New user",
//         "LIST": "List",
//         "EDITION": "Edition",
//         "SEARCH": "Search user...",
//         "WELCOME": "Welcome",
//         "SETTINGS": "Settings",
//         "CONTACT_SUPPORT": "Contact Support",
//         "LOG_OUT": "Log out",
//         "SIGN_IN": "Sign in",
//         "SIGN_UP": "Sign up"
//       },
//       "REPORT": {
//         "GENERAL_REPORTING": "General Report",
//         "RESTOCK_MANAGEMENT": "Restock Report",
//         "TITLE": "Reports",
//         "ISSUE": {
//           "NUMBER": "Issue",
//           "TITLE": "Issue Log",
//           "USER_EMAIL": "User",
//           "USER_NAME": "Name",
//           "ITEM": "Item Taken",
//           "ITEM_SKU": "SKU Number",
//           "QUANTITY": "Quantity",
//           "SITE": "Issue Site",
//           "LOCATION": "Issue Location",
//           "POSITION": "Shelf/Bin",
//           "DATE": "Issue Date",
//           "FROM": "Issues From",
//           "TO": "Issues To",
//           "FIND": "Search Issues"
//         },
//         "CHECKBOOK": {
//           "TITLE": "Checkbook"
//         }
//       }
//     }