import coreModule from 'app/core/core_module';

const template = `
<div class="modal-body">
  <div class="modal-header">
    <h2 class="modal-header-title">
      <i class="fa fa-exclamation"></i>
      <span class="p-l-1">未保存的更改</span>
    </h2>

    <a class="modal-header-close" ng-click="ctrl.dismiss();">
      <i class="fa fa-remove"></i>
    </a>
  </div>

  <div class="modal-content text-center">

    <div class="confirm-modal-text">
      您想保存您的更改吗?
    </div>

    <div class="confirm-modal-buttons">
      <save-dashboard-button dashboard="ctrl.unsavedChangesSrv.tracker.current" onSaveSuccess="ctrl.onSaveSuccess" >Save</save-dashboard-button>
      <button type="button" class="btn btn-danger" ng-click="ctrl.discard()">丢弃</button>
      <button type="button" class="btn btn-inverse" ng-click="ctrl.dismiss()">取消</button>
    </div>
  </div>
</div>
`;

export class UnsavedChangesModalCtrl {
  clone: any;
  dismiss: () => void;

  /** @ngInject */
  constructor(private unsavedChangesSrv: any) {}

  discard() {
    this.dismiss();
    this.unsavedChangesSrv.tracker.discardChanges();
  }

  save() {
    this.dismiss();
    this.unsavedChangesSrv.tracker.saveChanges();
  }

  onSaveSuccess = () => {
    this.dismiss();
    this.unsavedChangesSrv.tracker.onSaveSuccess();
  };
}

export function unsavedChangesModalDirective() {
  return {
    restrict: 'E',
    template: template,
    controller: UnsavedChangesModalCtrl,
    bindToController: true,
    controllerAs: 'ctrl',
    scope: { dismiss: '&' },
  };
}

coreModule.directive('unsavedChangesModal', unsavedChangesModalDirective);
