import organizationPageObject from '../../support/organization.po';

describe(`Remove Member`, () => {
  const targetEmail = `test-remove@rvrentpro.com`;

  function signIn() {
    organizationPageObject.useDefaultOrganization();
    cy.signIn(`/settings/organization/members`);
  }

  describe(`Given the current user removes a member from the organization`, () => {
    it('the member should disappear from the list', () => {
      signIn();

      organizationPageObject.removeMember(targetEmail);
      organizationPageObject.$getMemberByEmail(targetEmail).should('not.exist');
    });
  });
});
