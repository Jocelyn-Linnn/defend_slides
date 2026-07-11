/**
 * 簡報播放順序清單 (Slide Order Manifest)
 *
 * 這是簡報實際播放順序的唯一依據。slide-controller.js 會在每一頁載入時，
 * 自動從這裡找出「上一頁 / 下一頁」的檔名——不再需要在每個 slideN.html
 * 裡手動寫死 prevSlideUrl / nextSlideUrl。
 *
 * 之後要插入新頁面時：
 *   1. 新檔案可以取任何名字（不必連號，例如 slide28b.html、slide-limitations.html）
 *   2. 把新檔名加進下面陣列中你想要的位置即可
 *   3. 不需要修改、重新命名任何其他 slide 檔案
 */
export const slideOrder = [
  'all_slides.html',
  'cover.html',
  'table_of_contents.html',
  'motivation_1.html',
  'motivation_2.html',
  'research_purpose.html',
  'prior_work_1.html',
  'prior_work_2.html',
  'prior_work_3.html',
  'prior_work_4.html',
  'methodology.html',
  'system_design_motivation.html',
  'system_flow.html',
  'graph_design_goals.html',
  'build_radiology_association_graph_input.html',
  'build_radiology_association_graph_comparative_filtering.html',
  'build_radiology_association_graph_token_preprocessing.html',
  'build_radiology_association_graph_entity_feature_assignment.html',
  'build_radiology_association_graph_node_deduplication.html',
  'build_radiology_association_graph_supernode_construction.html',
  'build_radiology_association_graph_supernode_embedding.html',
  'build_radiology_association_graph_edge_weight_calculation.html',
  'build_radiology_association_graph_question_generation.html',
  'build_radiology_association_graph_knowledge_graph_at_scale.html',
  'inference_time_pipeline_report_generation_and_extraction.html',
  'retrieve_preprocess.html',
  'retrieve_method_1_single_layer_expansion_with_fixed_top_k.html',
  'retrieve_method_2_two_layer_expansion_with_adaptive_per_layer_filtering.html',
  'retrieval_design_rationale.html',
  'visual_question_answering_inference.html',
  'final_report_integration_generation.html',
  'experiment_result.html',
  'dataset.html',
  'convergence_validation.html',
  'evaluation_metrics.html',
  'experiment_settings.html',
  'results.html',
  'discussion.html',
  'root_cause_analysis_of_version_performance_differences.html',
  'divergent_trends_across_the_three_metrics.html',
  'macro_micro_f1_asymmetry.html',
  'failure_mode_analysis_of_metric_regression.html',
  'improvement_motivation_and_design_logic.html',
  'extended_experiment_fact_checking_examiner_results.html',
  'root_cause_analysis_of_fact_checking_examiner_failure.html',
  'contribution_conclusion.html',
  'research_summary.html',
  'research_limitations_and_future_directions.html',
  'thank_you.html',
];
