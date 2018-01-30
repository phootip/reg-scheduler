<template>
  <div class="modal-card">
    <div class="modal-card-head is-paddingless">
      <h1 class="card-header-title">
        <span class="has-text-weight-normal" style="padding-right: 0.25rem">
          2110312
        </span>
        Prog Lang
      </h1>
      <span class="has-text-right">
        <h1 class="card-header-title has-text-weight-light is-size-7">Change Section</h1>
      </span>
    </div>
    <div class="modal-card-body">
      <table class="table is-fullwidth">
        <thead>
          <th>#</th>
          <th>Teacher</th>
          <th>Time</th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ASD</td>
            <td>
              <table class="table is-narrow is-marginless">
                <tbody>
                  <td style="padding-top: 0;" class="is-uppercase">MON</td>
                  <td style="padding-top: 0;">18.00</td>
                  <td style="padding-top: 0;">-</td>
                  <td style="padding-top: 0;">19.00</td>
                </tbody>
              </table>
            </td>
            <td>
              <b-radio v-model="selectSection" native-value="1"></b-radio>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>ASD</td>
            <td>
              <table class="table is-narrow is-marginless">
                <tbody>
                  <td style="padding-top: 0;" class="is-uppercase">MON</td>
                  <td style="padding-top: 0;">18.00</td>
                  <td style="padding-top: 0;">-</td>
                  <td style="padding-top: 0;">19.00</td>
                </tbody>
              </table>
            </td>
            <td>
              <b-radio v-model="selectSection" native-value="2"></b-radio>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal-card-foot is-paddingless">
      <a class="card-footer-item" @click="$parent.close()">OK</a>
      <a class="card-footer-item" @click="$parent.close()">Cancel</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangeSectionModal',
  data() {
    return {
      selectSection: 0
    };
  },
};
</script>
