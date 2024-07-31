<template>
  <div class="bg-white">
    <!-- <n-spin :show="loading"> -->
    <div style="height: calc(100vh - 175px)">
      <BloodRelationGraph v-model:loading="loading" :relationData="graphData" />
    </div>
    <!-- </n-spin> -->
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import BloodRelationGraph from './components/BloodRelationGraph.vue'

  const loading = ref(false)

  const graphData = ref<any>(null)

  const fetchTableNodes = () => {
    loading.value = true

    graphData.value = {
      rootId: '9ccd3b1c-b81d-37e1-ac91-506887380ba9',
      nodes: [
        {
          id: 'a4502adb-411f-3140-a963-f9635cedcc17',
          uuid: 'a4502adb-411f-3140-a963-f9635cedcc17',
          tabName: 't03_agt_rela_h',
          schema: 'pdm_view',
          tabType: '0',
          dbName: 'T3RDM',
          ownSystem: 'HX',
          fieldNames: [
            'agt_modf',
            'agt_num',
            'assoc_agt_modf',
            'assoc_agt_num',
            'agt_rela_type_cd',
            'end_dt',
            'st_dt'
          ],
          nodeType: '-1',
          croppingFlag: '0'
        },
        {
          id: '843af1a3-242c-361c-95c6-449a07279826',
          uuid: '843af1a3-242c-361c-95c6-449a07279826',
          tabName: 'default_constant_table',
          schema: 'T3RDM_RDM_ACCT_H_Z',
          tabType: '0',
          dbName: 'T3RDM',
          ownSystem: 'HX',
          fieldNames: [
            'NULL',
            'vf_2',
            'vf_26',
            'vf_28',
            'vf_3',
            'vf_37',
            'vf_64',
            'vf_65',
            'vf_66',
            'vf_67',
            'vf_68'
          ],
          nodeType: '-1',
          croppingFlag: '0'
        },
        {
          id: '9ccd3b1c-b81d-37e1-ac91-506887380ba9',
          uuid: '9ccd3b1c-b81d-37e1-ac91-506887380ba9',
          tabName: 't12',
          schema: 'T3RDM_RDM_ACCT_H_Z',
          tabType: '0',
          dbName: 'T3RDM',
          ownSystem: 'HX',
          fieldNames: ['assoc_agt_num', 'num', 'agt_num'],
          nodeType: '0',
          croppingFlag: '0'
        },
        {
          id: '424ba130-f83f-36d2-845d-2105e76ed1d8',
          uuid: '424ba130-f83f-36d2-845d-2105e76ed1d8',
          tabName: 'vt_temp_table',
          schema: 'T3RDM_RDM_ACCT_H_Z',
          tabType: '2',
          dbName: 'T3RDM',
          ownSystem: 'HX',
          fieldNames: ['agt_num', 'num', 'assoc_agt_num', 'vf_2'],
          nodeType: '-1',
          croppingFlag: '0'
        },
        {
          id: '4f200b42-7de4-3e01-bd7c-d3795e62394b',
          uuid: '4f200b42-7de4-3e01-bd7c-d3795e62394b',
          tabName: 'rdm_acct_h_td',
          schema: 'rdm_data',
          tabType: '0',
          dbName: 'T3RDM',
          ownSystem: 'HX',
          fieldNames: [
            'accting_coa_id',
            'agt_modf',
            'appl_dt',
            'bcs_agt_status_cd',
            'bcs_cust_id',
            'bcs_cust_mgr_id',
            'bcs_prd_id',
            'blng_bcs_inter_org_id',
            'blng_cms_inter_org_id',
            'categ14_cd',
            'ccy_cd',
            'ccy_convert_rate',
            'cms_agt_status_cd',
            'cms_contract_num',
            'cms_cust_id',
            'cms_cust_mgr_id',
            'cms_dbill_acct_num',
            'cms_dbill_sub_acct_num',
            'cms_prd_id',
            'cms_sub_module_cust_id',
            'crdt_ctr_id',
            'crdt_ctr_modf',
            'ctr_rate',
            'cust_crdt_appl_ctr_id',
            'data_std_prd_id',
            'deval_loan_flg',
            'deval_prepare_ratio',
            'deval_provn_amt',
            'deval_provn_ccy_cd',
            'due_dt',
            'exec_rate',
            'int_mode_cd',
            'int_setl_day',
            'issue_amt',
            'issue_inter_acct_flg',
            'lacct_id',
            'loan_bal',
            'loan_ctr_id',
            'loan_dir_indu_cd',
            'loan_issue_dt',
            'margin_amt',
            'margin_ccy_cd',
            'margin_ratio',
            'np_loan_status_cd',
            'open_dt',
            'orgi_due_dt',
            'orgi_term',
            'orgi_term_typ_cd',
            'ovdue_flg',
            'posting_acct_id',
            'posting_acct_modf',
            'prev_repay_dt',
            'rating_dt',
            'refin_assoc_lacct',
            'refin_assoc_lacct_agt_modf',
            'refin_cnt',
            'refin_dt',
            'refin_flg',
            'repay_mode_cd',
            'repay_tm_period_cd',
            'retail_cnsm_loan_flg',
            'retail_oper_loan_flg',
            'retail_small_loan_flg',
            'rollover_cnt',
            'rollover_dt',
            'rollover_flg',
            'setl_dt',
            'setl_flg',
            'term',
            'term_typ_cd',
            'write_off_int',
            'write_off_princp',
            'change_cd',
            'etl_date',
            'etl_task_id',
            'ins_dt'
          ],
          nodeType: '1',
          croppingFlag: '1'
        },
        {
          id: '5e32a126-b85f-3f6a-b2c4-565b576f891c',
          uuid: '5e32a126-b85f-3f6a-b2c4-565b576f891c',
          tabName: 'rdm_acct_h',
          schema: 'rdm_data',
          tabType: '0',
          dbName: 'T3RDM',
          ownSystem: 'HX',
          fieldNames: [
            'accting_coa_id',
            'agt_modf',
            'appl_dt',
            'bcs_agt_status_cd',
            'bcs_cust_id',
            'bcs_cust_mgr_id',
            'bcs_prd_id',
            'blng_bcs_inter_org_id',
            'blng_cms_inter_org_id',
            'categ14_cd',
            'ccy_cd',
            'ccy_convert_rate',
            'change_cd',
            'cms_agt_status_cd',
            'cms_contract_num',
            'cms_cust_id',
            'cms_cust_mgr_id',
            'cms_dbill_acct_num',
            'cms_dbill_sub_acct_num',
            'cms_prd_id',
            'cms_sub_module_cust_id',
            'crdt_ctr_id',
            'crdt_ctr_modf',
            'ctr_rate',
            'cust_crdt_appl_ctr_id',
            'data_std_prd_id',
            'deval_loan_flg',
            'deval_prepare_ratio',
            'deval_provn_amt',
            'deval_provn_ccy_cd',
            'due_dt',
            'etl_date',
            'etl_task_id',
            'exec_rate',
            'ins_dt',
            'int_mode_cd',
            'int_setl_day',
            'issue_amt',
            'issue_inter_acct_flg',
            'lacct_id',
            'loan_bal',
            'loan_ctr_id',
            'loan_dir_indu_cd',
            'loan_issue_dt',
            'margin_amt',
            'margin_ccy_cd',
            'margin_ratio',
            'np_loan_status_cd',
            'open_dt',
            'orgi_due_dt',
            'orgi_term',
            'orgi_term_typ_cd',
            'ovdue_flg',
            'posting_acct_id',
            'posting_acct_modf',
            'prev_repay_dt',
            'rating_dt',
            'refin_assoc_lacct',
            'refin_assoc_lacct_agt_modf',
            'refin_cnt',
            'refin_dt',
            'refin_flg',
            'repay_mode_cd',
            'repay_tm_period_cd',
            'retail_cnsm_loan_flg',
            'retail_oper_loan_flg',
            'retail_small_loan_flg',
            'rollover_cnt',
            'rollover_dt',
            'rollover_flg',
            'setl_dt',
            'setl_flg',
            'term',
            'term_typ_cd',
            'vf_1',
            'vf_10',
            'vf_11',
            'vf_12',
            'vf_13',
            'vf_14',
            'vf_15',
            'vf_16',
            'vf_17',
            'vf_18',
            'vf_19',
            'vf_2',
            'vf_20',
            'vf_21',
            'vf_22',
            'vf_23',
            'vf_24',
            'vf_25',
            'vf_26',
            'vf_27',
            'vf_28',
            'vf_29',
            'vf_3',
            'vf_30',
            'vf_31',
            'vf_32',
            'vf_33',
            'vf_34',
            'vf_35',
            'vf_36',
            'vf_37',
            'vf_38',
            'vf_39',
            'vf_4',
            'vf_40',
            'vf_41',
            'vf_42',
            'vf_43',
            'vf_44',
            'vf_45',
            'vf_46',
            'vf_47',
            'vf_48',
            'vf_49',
            'vf_5',
            'vf_50',
            'vf_51',
            'vf_52',
            'vf_53',
            'vf_54',
            'vf_55',
            'vf_56',
            'vf_57',
            'vf_58',
            'vf_59',
            'vf_6',
            'vf_60',
            'vf_61',
            'vf_62',
            'vf_63',
            'vf_64',
            'vf_65',
            'vf_66',
            'vf_67',
            'vf_68',
            'vf_69',
            'vf_7',
            'vf_70',
            'vf_71',
            'vf_72',
            'vf_73',
            'vf_74',
            'vf_75',
            'vf_8',
            'vf_9',
            'write_off_int',
            'write_off_princp'
          ],
          nodeType: '1',
          croppingFlag: '0'
        }
      ],
      lines: [
        {
          from: '4f200b42-7de4-3e01-bd7c-d3795e62394b',
          to: '5e32a126-b85f-3f6a-b2c4-565b576f891c',
          text: '投影: fcea:; c7de:;',
          lineageType: 0,
          sqlIds: [
            {
              sqlId:
                'HX:t3rdm_rdm_acct_h_z.pl:b15ef755cf044edc76320230ed57fcea',
              text: []
            },
            {
              sqlId:
                'HX:t3rdm_rdm_acct_h_z.pl:40f4ea87ca9f9b0b9a7a9ccb584ec7de',
              text: []
            }
          ]
        },
        {
          from: '9ccd3b1c-b81d-37e1-ac91-506887380ba9',
          to: '4f200b42-7de4-3e01-bd7c-d3795e62394b',
          text: '投影: 8c5b:;',
          lineageType: 0,
          sqlIds: [
            {
              sqlId:
                'HX:t3rdm_rdm_acct_h_z.pl:7becb5cf0a5984fe6846935625b18c5b',
              text: []
            }
          ]
        },
        {
          from: 'a4502adb-411f-3140-a963-f9635cedcc17',
          to: '9ccd3b1c-b81d-37e1-ac91-506887380ba9',
          text: "投影: 5d69:pdm_view.t03_agt_rela_h.agt_rela_type_cd = '1026';pdm_view.t03_agt_rela_h.assoc_agt_num <> '0000000000000000';pdm_view.t03_agt_rela_h.st_dt <= 20231231;pdm_view.t03_agt_rela_h.end_dt > 20231231;",
          lineageType: 0,
          sqlIds: [
            {
              sqlId:
                'HX:t3rdm_rdm_acct_h_z.pl:88246a026e55b99e06984d8d21b75d69',
              text: [
                "pdm_view.t03_agt_rela_h.agt_rela_type_cd = '1026'",
                "pdm_view.t03_agt_rela_h.assoc_agt_num <> '0000000000000000'",
                'pdm_view.t03_agt_rela_h.st_dt <= 20231231',
                'pdm_view.t03_agt_rela_h.end_dt > 20231231'
              ]
            }
          ]
        },
        {
          from: '424ba130-f83f-36d2-845d-2105e76ed1d8',
          to: '9ccd3b1c-b81d-37e1-ac91-506887380ba9',
          text: '投影: 5d69:row_number() OVER (PARTITION BY vt_temp_table.agt_num ORDER BY vt_temp_table.num DESC) = 1;',
          lineageType: 0,
          sqlIds: [
            {
              sqlId:
                'HX:t3rdm_rdm_acct_h_z.pl:88246a026e55b99e06984d8d21b75d69',
              text: [
                'row_number() OVER (PARTITION BY vt_temp_table.agt_num ORDER BY vt_temp_table.num DESC) = 1'
              ]
            }
          ]
        },
        {
          from: '843af1a3-242c-361c-95c6-449a07279826',
          to: '9ccd3b1c-b81d-37e1-ac91-506887380ba9',
          text: '投影: 5d69:;',
          lineageType: 0,
          sqlIds: [
            {
              sqlId:
                'HX:t3rdm_rdm_acct_h_z.pl:88246a026e55b99e06984d8d21b75d69',
              text: []
            }
          ]
        }
      ]
    }
  }

  onMounted(() => {
    fetchTableNodes()
  })
</script>

<style lang="scss" scoped></style>
