# Components

## `ScheduleTable`

### props
#### `mainHeaders`
- Type: `[ScheduleHeader]`
- Default value:
  ```
  [
    ScheduleHeader('Monday', 'mon'),
    ScheduleHeader('Tuesday', 'tue'),
    ScheduleHeader('Wednesday', 'wed'),
    ScheduleHeader('Thursday', 'thu'),
    ScheduleHeader('Friday', 'fri'),
  ];
  ```
- Details:

  Headers used in the main axis, also used to access grouped items.

#### `crossHeaderRange`
- Type: `TimeRange`
- Default value: `TimeRange('mon', '08:00', '16:00')`
- Details

  The range which the whole table covers.

#### `items`
- Type: `{key: [ScheduleItem]}`
- Default value: `{}`
- Details:

  Items included in the table. `key` refers to the keys of `mainHeaders`.
