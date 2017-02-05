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
        *   Models should always have a parameterless constructor
        *   Use a static "create" method in the place of a constructor
            with parameters
    *   **services**: Angular services
*   Use LogHelper extensively for tracing (we can turn off in PROD)


##  TODO: St. Louis Demo on 2/15/17 #################################

### UX ##############################################################
*   ~~*Define data model (jake)*~~
*   ~~*Get list of cusips to show (jake)*~~
*   ~~*Add cusip (jake)*~~
*   ~~*Add detail endpoint for cusips (jake)*~~
*   *Move cusips between "transitions" (jake)*
    * ~~Implement: http://stackoverflow.com/a/32169241~~
*   Get cusips into "transition queues"
*   Isolate "transition queues" into "work groups" (i.e. setup, QC,
    and Audit)

*   Cleanup: fix current linting errors (ng lint)

*   Refactor out Cusip.setupPriorityType to complex object
    *   include params for things like styles, etc.
*   Refactor out Cusip.productType to complex object
    *   include params for things like styles, etc.    
*   ~~*Refactor HTTP API access to it's own class (jake)*~~

*   Design error handling strategy
*   Design "not found cusip detail" strategy
*   Design resiliency into HttpApiService
    *   getSingle doesn't verify there's an item [0]
    *   handle common HTTP errors (404, 500, etc...)
    *   there's plenty more...

### Design ##########################################################
* Cusip Details
    * Add Entry details Rows 
    * Style Cusip Identification Rows
    ~~* Add Timeline (dennis)*~~
    * Add Images
* Add Images to project
### Research ########################################################
*   [Make partials work](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html)
 

