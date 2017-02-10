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
        *   Do not put behavior here...they're only used to represent data
            that goes across network boundaries.  If you need behavior, then
            spin up a helper class to act on the data.
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
*   Cleanup: more complex modal styling (Trello style)
    *   https://css-tricks.com/considerations-styling-modal/

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
    ~~* Add Entry details Rows (dennis) *~~
    ~~* Style Cusip Identification Rows (dennis) *~~
    ~~* Add Timeline (dennis) *~~
    ~~* Add Images (dennis) *~~
    * Add close button "X" to header
    * DESC Screenshot for Screenshots Tab
    * Format Stage Buttons
    * Change width of Security Type Dropdown Button
    * Change width of Security Input
    * Talk with Jake about additional Description fields (3) on demand

* Cusip Card
    * Add Elapsed Time
    * Add Time Submitted
    * Add Icons for Security Type, Request Type,  
~~* Add Images to project *~~
* TODO: ADD MORE TASKS (I want to go home!)
### Research ########################################################
*   [Make partials work](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html)
 

