# Reg Scheduler

## Project Details

#### Motivation

We all know how well the infamous _reg chula_ performs. The worst thing is it has been _not good_ for more than 30 years and no one seems to be able to deal with the problem.

One of the biggest difference between university and (Thai) secondary school is the students have to arrange their own class schedule. Arranging schedules can cause (at least to me) quite amount of pain in the process since we have to use the _reg chula_.

With Chulalongkorn university being _one of the top leading university in Thailand_. We can't stand CU not having a high-end efficient tool helping students to do simple tasks such as arranging class schedule.

#### Real Project Details

##### expected features:
 - visually visualize class schedule as time table (similar to how _reg chula_ renders the hideous crimson class table for us).
 - able to edit and re-render the table smoothly.
 - able to hide/show courses.
 - able to show conflicting classes (as having conflicts in schedule tends to be illegal soon).
 - able to change across sections (to show how the schedule would look like with different sections on the same subjects; for subjects with different schedules on different sections).
 - automatically arrange schedule based on input courses (this will probably be done by using state-space search).
 - produce registration summary so we can fill that hideous form on _reg chula_.
 - should be able to save/export to somewhere such as google sheets.
 - _we are not sure how to implement this feature yet_ the details/schedules of subjects should be directly fetched from _reg chula_. this require unneccessarily hard work just to get small data (that should be publicly accessible) from the reg itself because _reg chula_ doesn't provide APIs or even a page that we can easily request and scrape from its HTML.

##### data schema

```
Section {
	courseId,
	courseName,
	number,
	timeRanges,
	teacher,
	color,
	show,
	remove,
}

TimeRange {
	day,
	start,
	end,
}
```

## Build Setup

after cloning the repository.

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
