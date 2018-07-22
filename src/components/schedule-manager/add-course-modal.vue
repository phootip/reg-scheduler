<template>
  <div class="modal-card">
    <div class="modal-card-head card-header is-paddingless">
      <h1 class="card-header-title">Add New Course</h1>
    </div>
    <div class="modal-card-body">
      <b-tabs expanded position="is-centered" type="is-boxed" v-model="activeTab">
        <b-tab-item label="from reg">
            <b-field grouped>
              <b-input placeholder="Course ID"></b-input>
              <b-input expanded placeholder="Course Name"></b-input>
              <p class="control">
                <button class="button">Search</button>
              </p>
            </b-field>
            <hr/>
            <table class="table is-fullwidth">
              <thead>
                <th>ID</th>
                <th>Name</th>
                <th></th>
              </thead>
              <tbody>
                <tr>
                  <td>2110312</td>
                  <td>COMP ENG ESS</td>
                  <td>
                    <a href="#" class="is-size-7">ADD</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <b-pagination size="is-small"></b-pagination>
        </b-tab-item>
        <b-tab-item label="manual">
          <section>
            <b-field grouped>
              <b-field label="ID">
                <b-input placeholder="Course ID"></b-input>
              </b-field>
              <b-field expanded label="Name">
                <b-input placeholder="Course Name"></b-input>
              </b-field>
            </b-field>
            <br/>
            <b-field grouped group-multiline>
              <b-field label="Day" expanded>
                <b-select expanded placeholder="day"></b-select>
              </b-field>
              <b-field label="From">
                <b-timepicker placeholder="from" position="is-top-left"></b-timepicker>
              </b-field>
              <b-field label="To">
                <b-timepicker placeholder="to" position="is-top-left"></b-timepicker>
              </b-field>
            </b-field>
          </section>
        </b-tab-item>
      </b-tabs>
    </div>
    <div class="modal-card-foot is-paddingless">
      <a class="card-footer-item" @click="$parent.close()">OK</a>
      <a class="card-footer-item" @click="$parent.close()">Cancel</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScheduleManagerAddCourseModal',
  data() {
    return {
      activeTab: 0,
    };
  },
};
</script>
