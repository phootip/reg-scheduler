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
                <b-input v-model="rawManualCourseData.code" placeholder="Course ID"></b-input>
              </b-field>
              <b-field expanded label="Name">
                <b-input v-model="rawManualCourseData.name" placeholder="Course Name"></b-input>
              </b-field>
            </b-field>
            <br/>
            <b-field grouped group-multiline>
              <b-field label="Day" expanded>
                <b-select v-model="rawManualCourseData.day" expanded placeholder="day">
                  <option v-for="day in ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']"
                    :key="day" :value="day">
                      {{ day.toUpperCase() }}
                  </option>
                </b-select>
              </b-field>
              <b-field label="From">
                <b-timepicker v-model="rawManualCourseData.from"
                  placeholder="from" position="is-top-left"/>
              </b-field>
              <b-field label="To">
                <b-timepicker v-model="rawManualCourseData.to"
                  placeholder="to" position="is-top-left"/>
              </b-field>
            </b-field>
          </section>
        </b-tab-item>
      </b-tabs>
    </div>
    <div class="modal-card-foot is-paddingless">
      <a class="card-footer-item" @click="handleOK">OK</a>
      <a class="card-footer-item" @click="$parent.close()">Cancel</a>
    </div>
  </div>
</template>

<script>
const transform = date => (date && `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`) || '';
export default {
  name: 'AddCourseModal',
  data() {
    return {
      activeTab: 0,
      rawManualCourseData: {
        name: '',
        code: '',
        day: 'MON',
        from: null,
        to: null,
      },
    };
  },
  computed: {
    manualCourseData() {
      const { name, code, day, from, to } = this.rawManualCourseData;
      return {
        name,
        code,
        sections: {
          1: {
            number: 1,
            teacher: 'NIL',
            timeRanges: [{
              day,
              end: transform(to),
              start: transform(from),
            }],
          },
        },
        selectedSection: 1,
      };
    },
  },
  methods: {
    handleOK() {
      this.$store.commit('addCourse', this.manualCourseData);
      this.$parent.close();
    },
  },
};
</script>
