<template>
    <div id="data-grid-users">
        <dx-data-grid
                :data-source="users"
                :show-borders="true"
                key-expr="id"
                @editorPreparing="onEditorPreparing"
        >
            <dx-editing
                    :allow-updating="true"
                    :allow-adding="true"
                    mode="popup"
            />
        <dx-column
                data-field="surname"
                date-type="string"
                alignment="center"
        />
        <dx-column
                data-field="name"
                data-type="string"
                alignment="center"
        />
        <dx-column
                data-field="patronimic"
                data-type="string"
                alignment="center"
                css-class="bullet"
        />
        <dx-column
                data-field="email"
                caption="email"
                data-type="string"
                alignment="center"
        />
        <dx-column
                data-field="birthday"
                data-type="date"
        />
        <dx-column
                data-field="city"
                data-type="string"
        />

        <dx-group-panel :visible="false"/>
        <dx-search-panel
                :visible="true"
                :highlight-case-sensitive="true"
        />
        <dx-grouping :auto-expand-all="false"/>
        <dx-pager
                :allowed-page-sizes="pageSizes"
                :show-page-size-selector="true"
        />
        <dx-paging :page-size="10"/>
    </dx-data-grid>
    </div>
</template>

<script>
// import DataSource from 'devextreme/data/data_source';
import 'devextreme/data/odata/store';
// import UserExtr from './UserExtr';

import {
  DxDataGrid,
  DxColumn,
  DxGrouping,
  DxGroupPanel,
  DxPager,
  DxPaging,
  DxSearchPanel,
  DxEditing

} from 'devextreme-vue/data-grid';

let collapsed = false;

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxGrouping,
    DxGroupPanel,
    DxPager,
    DxPaging,
    DxSearchPanel,
    DxEditing
  },
  data: function () {
    return {
      visible: true,
      user: {},
      action: 'add',
      currentId: 2,
      setStateValue(rowData, value) {
        rowData.id = null;
        this.defaultSetCellValue(rowData, value);
      },

      users:
        [{
          id: '1',
          surname: 'Иванов',
          name: 'Иван',
          patronimic: 'Иванович',
          email: 'ivanov@reso.ru',
          birthday: '01.01.1990',
          city: 'Moscow'
        },
        {
          id: '2',
          surname: 'Петров',
          name: 'Петр',
          patronimic: 'Петрович',
          email: 'petrov@reso.ru',
          birthday: '02.02.1990',
          city: 'Moscow'
        }
        ],
      pageSizes: [10, 25, 50, 100],
      onContentReady: function(e) {
        if (!collapsed) {
          e.component.expandRow(['EnviroCare']);
          collapsed = true;
        }
      },
      onEditorPreparing(e) {
        if (e.parentType === 'dataRow' && e.dataField === 'id') {
          e.editorOptions.disabled = (typeof e.row.data.id !== 'number');
        }
      }
    };
  }
};
</script>

<style scoped>
    body {
        font-family: Helvetica Neue, Arial, sans-serif;
        font-size: 14px;
        color: #444;
    }

    table {
        border: 2px solid #42b983;
        border-radius: 3px;
        background-color: #fff;
        width: 600px;
    }

    th {
        background-color: #42b983;
        color: rgba(255, 255, 255, 0.66);
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        color: black;
    }

    td {
        background-color: #f9f9f9;
    }

    th, td {
        min-width: 120px;
        padding: 10px 20px;
    }

    th.active {
        color: #fff;
    }

    th.active .arrow {
        opacity: 1;
    }

    .arrow {
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;
        margin-left: 5px;
        opacity: 0.66;
    }

    .arrow.asc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid #fff;
    }

    .arrow.dsc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #fff;
    }

</style>
