lang=${1:-en}
components=($(ls ../../components))

# shellcheck disable=SC2068
for str in ${components[@]}; do
  echo "Generating ${str}.json"
  echo "{}" > "./${lang}/home/${str}.json"
done