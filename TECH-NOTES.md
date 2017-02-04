#   Technical Notes #################################################

## Standards ########################################################
*   JS class should be proper case
*   JS file names and folders should be hyphen seperated
*   Aim to use short, concise names, when possible
*   App folders:
    *   **components**: Angular components
    *   **helpers**: static utility functions
    *   **models**: data models that represent how the client-side expects
        to receive server-side data
    *   **services**: Angular services
*   Use LogHelper extensively for tracing (we can turn off in PROD)


##  TODO: St. Louis Demo on 2/15/17 #################################

### UX ##############################################################
*   ~~*Define data model (jake)*~~
*   ~~*Get list of cusips to show (jake)*~~
*   ~~*Add cusip (jake)*~~
*   Move cusips between "transitions"
*   Get cusips into "transition queues"
*   Isolate "transition queues" into "work groups" (i.e. setup, QC,
    and Audit)
*   Refactor out Cusip.setupPriorityType to complex object
    *   include params for things like styles, etc.
*   Refactor out Cusip.productType to complex object
    *   include params for things like styles, etc.    
*   Refactor HTTP API access to it's own class
*   Design error handling strategy

### Design ##########################################################

### Research ########################################################
*   [Make partials work](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html)
 

